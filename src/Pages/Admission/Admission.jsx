import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Admission = () => {
    const data = useLoaderData();

    // const bookCollege = (data) => {
    //     console.log(data);
    //     if (data) {
    //         fetch("http://localhost:4000/admit", {
    //             method: 'POST',
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data.insertedId);
    //                 if (data.insertedId) {
    //                     Swal.fire({
    //                         position: 'top-end',
    //                         icon: 'success',
    //                         title: `College Booked`,
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     })
    //                 }
    //             })
    //     }
    // }

    return (
        <div className='mt-16 '>
            <h1 className='text-3xl font-bold'>Book you college to Admit</h1>
            <div className="overflow-x-auto">
                <table className="table mt-6">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Admission Date</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            data.map((d, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={d.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className='font-semibold'>
                                    {d.name}
                                </td>
                                <td>{d.admission_date}</td>
                                <th>
                                    <Link className='btn' to={`/admission/${d._id}`}>Book to admit</Link>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Admission;