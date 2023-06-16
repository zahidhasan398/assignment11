import React from 'react';
import { Link } from 'react-router-dom';

const Subdatainfo = ({ subdata }) => {
    const { photourl,name,price,rating,_id} = subdata;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={photourl} alt="Shoes" className='w-full h-[50vh]' /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold">{name}</h2>
                <div>
                    <h1 className='text-xl font-bold'>price: <span className='text-red-700'>{price}</span></h1>
                    <h1 className='text-xl font-bold'>rating: <span className='text-red-700'>{rating}</span></h1>
                </div>
                <div className="card-actions justify-end">
                <Link to={`/viewdetails/${_id}`}><button className='btn btn-success'>view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Subdatainfo;