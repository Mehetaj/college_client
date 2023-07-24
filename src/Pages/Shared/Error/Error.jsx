import React from 'react';
import img from '../../../assets/64f758f5-5563-4a5b-8aee-dbbc1dd6ac49.txt'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-4  lg:mt-20'>
            <h1 className='text-2xl font-bold'>Page Not Found!</h1>
            <p className='w-full mx-auto lg:w-1/2 my-4'>Sorry, we couldn’t find the page you’re looking for. Perhaps <br /> you’ve mistyped the URL? Be sure to check your spelling.</p>
            <div className='flex justify-center items-center'>
            <img src={img} alt="" />
            </div>
            <Link to="/" className='btn btn-neutral'>Back to Home</Link>
        </div>
    );
};

export default Error;