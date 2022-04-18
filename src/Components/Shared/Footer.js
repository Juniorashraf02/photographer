import React from 'react';
import { AiFillFacebook, AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';
const date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='bg-stone-900 mt-10'>
            <div className="py-10" >
                <h1 className='text-white font-semibold'>Join with me on social media</h1>
                <div className="flex gap-5 justify-center my-3">
                    <a href="https://www.facebook.com/juniorashraf02" target="_blank" rel="noreferrer"><AiFillFacebook className='text-white' /></a>
                    <a href="https://www.linkedin.com/in/istiakashraf/" target="_blank" rel="noreferrer"><AiFillLinkedin className='text-white' /></a>
                    <a href="https://www.facebook.com/juniorashraf02" target="_blank" rel="noreferrer"><AiFillYoutube className='text-white' /></a>
                </div>
            </div>
            <h1 className='text-gray-400'>copyright &copy; {date}</h1>
        </div>
    );
};

export default Footer;