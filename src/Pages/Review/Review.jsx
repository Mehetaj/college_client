import React from 'react';
import image from '../../assets/rev.webp'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Review = () => {

    const {user} = useAuth()


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const msg = form.msg.value;
        const review = form.review.value;
        const savedReview = {message: msg, review: parseInt(review), name: user.displayName};
        console.log(savedReview);

        if (savedReview) {
            fetch("http://localhost:4000/review", {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(savedReview)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Review added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    }

    return (
        <div className='bg-green-50 lg:h-[100vh] flex items-center gap-20 p-10'>
            <img className='w-1/2 hidden lg:grid' src={image} alt="" />
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl my-6 font-bold'>Get Review</h1>

                <textarea required className='w-full lg:w-[400px] bg-gray-100 rounded-xl h-[100px] py-2 px-2' name='msg' type="text" placeholder='Message' />
                <select required defaultValue={"Please Select"} className='w-full lg:w-[400px] bg-gray-100  block my-4 rounded-xl py-2 px-2' name="review">
                    <option placeholder='Review' defaultValue value="Review">Review</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className='btn bg-green-500' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Review;