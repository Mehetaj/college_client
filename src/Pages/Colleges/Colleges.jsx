import React, { useEffect, useState } from 'react';
import SingleCard from '../CollegeCard/SingleCard';

const Colleges = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/colleges")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
            {
                data.map(d => <SingleCard data={d} key={d._id}/>)
            }
            </div>
        </div>
    );
};

export default Colleges;