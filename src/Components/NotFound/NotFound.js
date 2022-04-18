import React from 'react';
import img from '../image/notfound.jpg';

const NotFound = () => {
    return (
        <div className="mt-28 mx-auto container">
            <img className="mx-auto" src={img} alt="Not found!" />
        </div>
    );
};

export default NotFound;