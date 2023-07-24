import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Form = () => {
    const [book, setBook] = useState({})
    const id = useParams();
    const data = useLoaderData();
    useEffect(() => {
        const find = data?.find(item => item._id = id);
        console.log(find);
        setBook(find)
    }, [data, id])


    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const birth = form.birth.value;
        const address = form.address.value;
        const photo = form.photo.value;

        const savedData = { name, email, subject, phone, birth, address, photo, collegeName: book.name, collegeId: book._id }
        if (savedData) {
            fetch("http://localhost:4000/admit", { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(savedData) })
                .then(res => res.json())
                .then(data => {
                    // console.log(data.insertedId);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `College Booked`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div>
            <form onSubmit={onSubmit} className='p-10'>
                <h1 className='text-3xl font-bold'>Booking Form to college</h1>

                <input required className='my-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='name' placeholder='Candidate Name' />
                <input required className='mb-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="email" name='email' placeholder='Candidate Email address' />
                <input required className='bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='subject' placeholder='Subject' />
                <input required className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='phone' placeholder='Phone number' />
                <input required className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="date" name='birth' placeholder='Date of birth' />
                <input required className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="text" name='address' placeholder='Address' />
                <input required className='mt-[32px] bg-[whitesmoke] px-2 py-3 rounded-md w-full' type="url" name='photo' placeholder='Photo URL' />


                <input type="submit" value="Register" className='btn w-full mt-4 bg-gray-700 text-white' />

                <p className='divider text-gray-500 mt-3'>or continue with</p>
            </form>
        </div>
    );
};

export default Form;