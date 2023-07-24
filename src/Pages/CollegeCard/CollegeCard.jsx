import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const CollegeCard = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/colleges")
        .then(res => res.json())
        .then(data => {
            setData(data)
            setRecords(data)
        })
    },[])

    const handleFilter = (e) => {
        setRecords(data.filter(f => f.name.toLowerCase().includes(e.target.value)))
    }

    return (
        <div className='bg-gray-100 p-10 rounded-2xl'>
            <div className='text-center'>
            <h1 className='text-3xl mt-12 font-bold'>Find your favorite college</h1>

<input onChange={handleFilter} type="text" className=' mt-4 w-full lg:w-[370px] py-3 px-2 rounded-md' placeholder='Search Colleges' name="" id="" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-12'>
                {
                    records.slice(0,3).map(d => <SingleCard data={d} key={d._id}/>)
                }
            </div>
        </div>
    );
};

export default CollegeCard;