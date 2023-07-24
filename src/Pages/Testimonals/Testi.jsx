import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import img from '../../assets/png-transparent-star-favorite-rating.png'
import { Link } from 'react-router-dom';

const Testi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/review")
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])




    return (
        <div className='mt-16 bg-gray-100 rounded-2xl p-10'>
            <h1 className='text-2xl font-bold text-center mb-4'>What says Our users</h1>
            <div className=''>
                {
                    data.map(d => <div key={d._id} className='w-full my-4 py-4 rounded-xl text-center bg-blue-400 p-2 text-white'>
                        <h1 className='text-3xl font-bold my-4'>{d.name}</h1>
                        <p className='text-lg'>{d.message}</p>
                        <div title='ratings 5 star' className='flex'>
                            
                        </div>
                    </div>)
                }

                <Link to="/review" className='btn btn-neutral'>Send Feedback</Link>
            </div>
        </div>
    );
};

export default Testi;