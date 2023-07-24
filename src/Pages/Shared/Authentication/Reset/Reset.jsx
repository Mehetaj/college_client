import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Reset = () => {
    const {resetPassword} = useAuth();
    const onsubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        resetPassword(email)
    }
    return (
        <div className='flex justify-center mt-16 items-center'>
            <div className='text-center'>
                <span className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                        <g clipPath="url(#clip0_5324_10361)">
                            <path opacity="0.08" d="M47.9999 95.9998C74.5095 95.9998 95.9998 74.5095 95.9998 47.9999C95.9998 21.4903 74.5095 0 47.9999 0C21.4903 0 0 21.4903 0 47.9999C0 74.5095 21.4903 95.9998 47.9999 95.9998Z" fill="url(#paint0_linear_5324_10361)" />
                            <path d="M62.9998 44H57.4761V32.4225C57.4761 27.3985 53.2251 23.3113 48.0001 23.3113C42.7751 23.3113 38.5239 27.3987 38.5239 32.4225V44H33V32.4225C33 24.4699 39.729 18 47.9999 18C56.2709 18 63 24.4699 63 32.4225V44H62.9998Z" fill="#454F5B" />
                            <path d="M60.5352 77.832H35.4648C29.7093 77.832 25 73.1599 25 67.4495V46.8234C25 44.0782 27.264 41.832 30.0309 41.832H65.9691C68.736 41.832 71 44.0782 71 46.8234V67.4495C70.9998 73.1599 66.2907 77.832 60.5352 77.832Z" fill="url(#paint1_linear_5324_10361)" />
                            <path d="M64 52.832H32C30.8954 52.832 30 53.7275 30 54.832V64.832C30 65.9366 30.8954 66.832 32 66.832H64C65.1046 66.832 66 65.9366 66 64.832V54.832C66 53.7275 65.1046 52.832 64 52.832Z" fill="#B195FE" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M33 53.7539H63C64.1046 53.7539 65 54.6493 65 55.7539V63.7539C65 64.8585 64.1046 65.7539 63 65.7539H33C31.8954 65.7539 31 64.8585 31 63.7539V55.7539C31 54.6493 31.8954 53.7539 33 53.7539ZM41.4711 58.3512L40.7088 57.2493L38.9056 58.4968V56.3042H37.5656V58.4968L35.7623 57.2493L35 58.3512L37.0579 59.7751L35 61.1991L35.7623 62.301L37.5656 61.0535V63.2461H38.9056V61.0535L40.7088 62.301L41.4711 61.1991L39.4131 59.7751L41.4711 58.3512ZM51.2358 58.3512L50.4732 57.2493L48.6702 58.4968V56.3042H47.33V58.4968L45.527 57.2493L44.7644 58.3512L46.8224 59.7751L44.7644 61.1991L45.527 62.301L47.33 61.0535V63.2461H48.6702V61.0535L50.4732 62.301L51.2358 61.1991L49.1778 59.7751L51.2358 58.3512ZM60.2375 57.2493L61 58.3512L58.942 59.7751L61 61.1991L60.2375 62.301L58.4344 61.0535V63.2461H57.0944V61.0535L55.2912 62.301L54.5288 61.1991L56.5868 59.7751L54.5288 58.3512L55.2912 57.2493L57.0944 58.4968V56.3042H58.4344V58.4968L60.2375 57.2493Z" fill="#1C0F79" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_5324_10361" x1="0" y1="0" x2="95.9998" y2="95.9998" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FDAB76" />
                                <stop offset="1" stopColor="#FA541C" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_5324_10361" x1="25" y1="41.832" x2="59.9449" y2="86.4838" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FDAB76" />
                                <stop offset="1" stopColor="#FA541C" />
                            </linearGradient>
                            <clipPath id="clip0_5324_10361">
                                <rect width="96" height="96" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <h1 className='text-2xl font-bold mt-3'>Forgot Your Password?</h1>
                <p className='w-[70%] mx-auto mt-2'>Please enter the email address associated with your account, and we'll email you a link to reset your password.</p>

                <form onSubmit={onsubmit} className='flex justify-center mt-5'>
                    <div>
                        <input name='email' className='form-control bg-gray-100 w-[400px] input' placeholder='Email Address' type="email" />
                        <input className='btn btn-neutral block w-[400px] my-4' type="submit" value="Reset Password" />

                        <Link className='underline font-semibold' to="/signin">Return to sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reset;