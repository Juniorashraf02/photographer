import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Login from './Components/Shared/Login';
import Signup from './Components/Shared/Signup';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Services from './Components/Home/Services/Services';
import Projects from './Components/Home/Projects/Projects';
import Proceed from './Components/Proceed/Proceed';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AboutMe from './Components/Aboutme/Aboutme';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/services" element={<Services />}></Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/proceed" element={
          <RequireAuth>
            <Proceed />
          </RequireAuth>
        }></Route>
<Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
