import React from 'react';
import Hiring from '../Hiring/Hiring';
import Services from './Services/Services';



const Home = () => {
    return (

       <div >
          <img className='w-full mt-10' src={`https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_960_720.jpg`} alt="" />

          <Services/>
         <Hiring/>
       </div>


    )
};

export default Home;