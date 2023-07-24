import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/g")
        .then(res =>res.json())
        .then(data => {
            setData(data[0].images)
            // console.log(data[0].images);
        })
    },[])
    return (
        <div className='mt-20 bg-gray-200 p-10 rounded-2xl text-center'>
            <h1 className='text-2xl font-bold'>Graduation Gallery</h1>
            <div className='mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {data?.map((d,i) => <img className='w-[1000px] rounded-lg h-[300px] lg:h-[500px]' src={d} key={i}/>)}
        </div>
        </div>
    );
};

export default Gallery;