import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user } = useAuth();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/profile")
        .then(res => res.json())
        .then(data => {
            const findedData = data.find(d => d.name === user.displayName)
            setData(findedData)
        })
    }, [])

    console.log(data);

    const onSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const university = form.university.value;
        const address = form.address.value;
        const savedInfo = { name, email, university, address };
        // console.log(savedInfo);

        fetch("http://localhost:4000/profile", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(savedInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Profile saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className='my-20'>
            <h1 className='mt-20 text-2xl font-semibold'>Welcome Back, {user.displayName}</h1>
            <form onSubmit={onSubmit}>
                <input defaultValue={data.name || user.displayName} className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='name' placeholder='Full Name' />
                <input defaultValue={data.name || user.email} className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="email" name='email' placeholder='Email address' />
                <input defaultValue={data.university || ''} className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='university' placeholder='University' />
                <input defaultValue={data.address || ''} className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='address' placeholder='Address' />
                <div className='flex justify-center'>
                    <input type="submit" value="Save" className='btn btn-neutral w-full lg:w-1/2 mt-4' />
                </div>
            </form>
        </div>
    );
};

export default Profile;