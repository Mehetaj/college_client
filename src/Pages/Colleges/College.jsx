import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const College = () => {
    const data = useLoaderData();
    console.log(data);
    const { image, name, event, sports_categories, admission_process, event_details, research_works, gallery } = data;
    return (
        <div className='w-[95%] mx-auto'>
            <div className='flex justify-center'>
                <img className='w-full  lg:h-[800px]' src={image} alt="" />
            </div>
            <div id='clg'>
                <div id="cg">
                    <h1 className='font-semibold text-3xl mt-2'>College Name: {name}</h1>
                    <h1 className=' text-2xl mt-2'>Event  {event} {event_details}</h1>
                    <h1 className=' text-2xl mt-2'>Sports categories: {sports_categories}</h1>
                    <h1 className=' text-2xl mt-2'>Researches: {research_works}</h1>
                    <h1 className=' text-2xl mt-2'>Admission process: {admission_process}</h1>
                </div>
                <div>
                    <h1 className='text-3xl font-bold my-8'>Recent Gallery</h1>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            gallery.map(m => <img className='w-[400px] h-[400px]' src={m} key={gallery._id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;