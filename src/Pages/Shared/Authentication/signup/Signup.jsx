import React from 'react';
import img from '../../../../assets/login.png'
import { Link, json, useNavigate } from 'react-router-dom';
import SocialAuth from '../SocialAuth/SocialAuth';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Signup = () => {

    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        console.log(name, email, password, confirm_password);

        if (password === confirm_password && password.length >= 6) {
            createUser(email, password)
                .then(result => {
                    updateUserProfile(name);
                    const savedUser = { name, email };
                    if (savedUser) {
                        fetch("http://localhost:4000/users", {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(savedUser),

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data.insertedId);
                                if (data.insertedId) {
                                    navigate('/')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Create account successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })
                    }
                })
        }

    }

    return (
        <div>
            <div className='w-[1440px] mx-auto'>
                <h1 className='text-2xl font-bold'>Find Out <span className='text-7xl text-orange-500'>.</span> </h1>
                <div className='flex mt-16 items-center justify-around'>
                    <img className='w-[654px] h-[550px]' src={img} alt="" />
                    <div className='w-[360px] h-[688px] shadow-lg'>
                        <form onSubmit={handleSubmit} className='p-10'>
                            <h1 className='text-3xl font-bold'>Get Started</h1>
                            <p className='mt-4 text-gray-400'>Already have an account?
                                <Link to="/signin" className='text-orange-600 '>Login</Link>
                            </p>

                            <input required className='my-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='name' placeholder='Full Name' />
                            <input required className='mb-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="email" name='email' placeholder='Email address' />
                            <input required className=' bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="password" name='password' placeholder='Password' />
                            <input required className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="password" name='confirm_password' placeholder='Confirm Password' />

                            <p className='text-right underline text-gray-400 mt-3'>Forgot password?</p>

                            <input type="submit" value="Register" className='btn w-full mt-4 bg-gray-700 text-white' />

                            <p className='divider text-gray-500 mt-3'>or continue with</p>
                        </form>
                            <SocialAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;