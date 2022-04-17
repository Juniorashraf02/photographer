import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Login from './Components/Shared/Login';
import Signup from './Components/Shared/Signup';
import Blogs from './Blogs/Blogs';
import Contacts from './Contacts/Contacts';
import Services from './Components/Home/Services/Services';
import Projects from './Components/Home/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
