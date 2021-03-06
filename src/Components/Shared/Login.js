import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import './Form.css';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [signInWithEmail, user, loading, emailError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setUserInfo({ ...userInfo, password: e.target.value });
        setErrors({ ...errors, password: "" });
    }



    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password);
        console.log(userInfo);
    }

    const handleGoogleSignIn=(e)=> {
        // setUserInfo({ ...userInfo,email: e.target.value})
        signInWithGoogle(userInfo.email);
        
    }

    const handleResetPassword =()=>{
        sendPasswordResetEmail(userInfo.email);
        toast.info("sending email");
        toast.success("Email sent",{ delay: 1000 });
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    useEffect(() => {
        const error = emailError || googleError || resetError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [emailError, googleError]);

    


    return (
        <div className='container mx-auto justify-items-center mt-32'>
            <div className="login-container login-container-color my-5">
                <h1 className='login-tittle'>Log In Now</h1>
                <form onSubmit={handleLogin} className="login-form">


                    <input onChange={handleEmailChange} type="email" name="" id="email" placeholder="Enter your email" />
                    {errors?.email && <p className="error-message">{errors.email}</p>}

                    <input onChange={handlePasswordChange} type="password" name="" id="password" placeholder="Enter your password" />
                    {errors?.password && <p className="error-message">{errors.password}</p>}

                    <button>Log In</button>

                    <p>Don't have an account? <Link to="/signup" className="text-sky-400">Sign up</Link> </p>
                    <br />
                    <p>Forgot password? <u onClick={handleResetPassword} className="cursor-pointer">reset password</u> </p>
                    <ToastContainer/>
                    <div className="flex gap-5 items-center mt-5 justify-center">
                        <div className="bg-blue-400 h-0.5 border-1 w-full"><hr /></div>
                        <div className="text-blue-400">or</div>
                        <div className="bg-blue-400 h-0.5  w-full"><hr /></div>
                    </div>
                    
                </form>
                <button onClick={handleGoogleSignIn} className="flex ">
                        <FcGoogle className="display: inline justify-self-start text-4xl"></FcGoogle>
                        <p className="display: inline px-10">Google Sign In</p>
                    </button>
                    {errors?.password && <p className="error-message">{errors.password}</p>}

            </div>

        </div>
    );
};

export default Login;