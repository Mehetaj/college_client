import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ data }) => {
    // console.log(data);
    const { name, image, admission_date, event, research_history, sports, _id } = data
    return (
        <div>
            <div className="card mt-4 lg:mt-0 w-full lg:w-96 h-[600px] bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='font-semibold'>Admission on {admission_date}</p>
                    <p className='text-lg font-semibold'>Event: {event}</p>
                    <p className='text-lg'><span className='font-bold'>Research on </span>:  {research_history}</p>
                    <p className=''>Regular sports is {sports}</p>
                    <div title='ratings 5 star' className='flex'>
                        <img className='w-10 -mx-1 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4DjPmsrsn3JWEHud2B8vydx5FLXVxbrSGbD1Gj97KA&s" alt="" />
                        <img className='w-10 -mx-1 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4DjPmsrsn3JWEHud2B8vydx5FLXVxbrSGbD1Gj97KA&s" alt="" />
                        <img className='w-10 -mx-1 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4DjPmsrsn3JWEHud2B8vydx5FLXVxbrSGbD1Gj97KA&s" alt="" />
                        <img className='w-10 -mx-1 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4DjPmsrsn3JWEHud2B8vydx5FLXVxbrSGbD1Gj97KA&s" alt="" />
                        <img className='w-10 -mx-1 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4DjPmsrsn3JWEHud2B8vydx5FLXVxbrSGbD1Gj97KA&s" alt="" />
                    </div>
                    <p>1 Researches of this college</p>
                    <div className="card-actions justify-end">
                        <Link to={`/colleges/${_id}`} className="btn bg-gray-800 text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;