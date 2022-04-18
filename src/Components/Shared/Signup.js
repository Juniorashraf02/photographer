import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Form.css';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: "",
    });

    


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid Email. Please check your email" });
            setUserInfo({ ...userInfo, email: "" })
        }

        // console.log(userInfo);
    }

    const handlePasswordChange =(e)=>{
        const passwordRegex = /.{5,}/;  
        const validPassword = passwordRegex.test(e.target.value); 
        
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }
    }


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signUpError,
      ] = useCreateUserWithEmailAndPassword(auth,  { sendEmailVerification: true });


      const handleSignUp = (e)=>{
          e.preventDefault();
        //   console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        
      }

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      useEffect(()=>{
          if(user){
            navigate(from);
          }
      },[user])

      useEffect(() => {
          const error = signUpError;
          if(error){
              switch(error?.code){
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
      },[signUpError])

    return (
        <div className='container mx-auto justify-items-center mt-32'>
            <div className="login-container signup-container-color my-5">
                <h1 className='login-tittle'>Sign Up Now</h1>
                <form onSubmit={handleSignUp} className="login-form">


                    <input type="text" name="" id="name" placeholder="Enter your name" required/>

                    <input onChange={handleEmailChange} type="email" name="" id="email" placeholder="Enter your email" />
                    {errors?.email && <p className="error-message">{errors.email}</p>}

                    <input onChange={handlePasswordChange} type="password" name="" id="password" placeholder='Enter a password' />
                    {errors?.password && <p className="error-message">{errors.password}</p>}

                    <button>Sign Up</button>

                    <p>Already have an account? <Link to="/login" className="text-sky-400">Log in</Link> </p>


                </form>
            </div>
        </div>
    );
};

export default Signup;