import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Paper = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/research")
            .then(res => res.json())
            .then(data => {
                setData(data);
                // console.log(data);
            })
    }, [])
    return (
        <div className='mt-16 bg-gray-100 p-10 rounded-2xl'>
            <h1 className='text-2xl font-bold text-center'>Some research paper links that researched by some colleges student</h1>


            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            data.map((d, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{d.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {d.author}
                                </td>
                                <td>{d.year}</td>
                                <th>
                                    <Link to={d.url}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>

                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Paper;