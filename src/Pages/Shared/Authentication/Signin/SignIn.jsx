import React, { useState } from 'react';
import img from '../../../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from '../SocialAuth/SocialAuth';
import useAuth from '../../../../hooks/useAuth';

const SignIn = () => {
    const {resetPassword, signIn} = useAuth()
    const naviagte = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setEmail(email)
        setPassword(password)

        signIn(email,password)
        .then(result => {
            if (result.user) {
                naviagte("/")
            }
        })

    }

    

    return (
        <div className='lg:w-[1440px] mx-auto'>
            <h1 className='text-2xl font-bold'>Find Out <span className='text-7xl text-orange-500'>.</span> </h1>
            <div className='flex mt-16 items-center justify-around'>
                <img className='lg:w-[654px] lg:h-[550px] hidden lg:flex' src={img} alt="" />
                <div className='lg:w-[360px] lg:h-[520px] shadow-lg'>
                    <form onSubmit={handleLogin} className='p-10'>
                        <h1 className='text-3xl font-bold'>Login</h1>
                        <p className='mt-4 text-gray-400'>Don't have an account?
                            <Link to="/signup" className='text-orange-600 '>Get Started</Link>
                        </p>

                        <input onChange={(e)=> setEmail(e.target.value)} className='my-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="email" name='email' placeholder='Email address' />
                        <input className=' bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="password" name='password' placeholder='Password' />

                        <Link to="/reset"  className='text-right underline text-gray-400 mt-3'>Forgot password?</Link>

                        <input type="submit" value="Login" className='btn w-full mt-4 bg-gray-700 text-white' />

                        <p className='divider text-gray-500 mt-3'>or continue with</p>
                    </form>
                        <SocialAuth />
                </div>
            </div>
        </div>
    );
};

export default SignIn;