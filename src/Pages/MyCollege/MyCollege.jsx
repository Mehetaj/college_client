import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyCollege = () => {
    const data = useLoaderData();
    const { user } = useAuth();
    // console.log(data);

    const filter = data?.filter(item => item.email = user?.email);
    console.log(filter);

    return (
        <div>
            <h1 className='text-3xl font-semibold my-10'>Your booked Colleges</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Candidate Name</th>
                            <th>Candidate Email</th>
                            <th>Phone</th>
                            <th>College Name</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                            filter.map((d,i) =><tr key={d._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{d.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {d.email}
                                </td>
                                <td>{d.phone}</td>
                                <td>{d.collegeName}</td>
                                <td>
                                    <Link className='btn' to="/review">Add review</Link>
                                </td>
                            </tr> )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCollege;