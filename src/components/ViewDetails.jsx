import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from './UseTitle';

const ViewDetails = () => {
    UseTitle("view-details")
    const singleData = useLoaderData();
    console.log(singleData);
    const {sellerName,name,subcategory,price,quantity,_id,details,photourl,sellerEmail,rating}=singleData;
    return (
        <div className='max-w-5xl mx-auto'>
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={photourl} /></figure>
                <div className="card-body">
                    <h2 className="text-4xl font-extrabold">{name}</h2>
                    <h1 className='text-xl font-bold'>seller name: <span>{sellerName}</span></h1>
                    <h1 className='text-xl font-bold'>seller email: <span>{sellerEmail}</span></h1>
                    <h1 className='text-xl font-bold'>sub category: <span>{subcategory}</span></h1>
                    <h1 className='text-xl font-bold'>price: <span>{price}tk</span></h1>
                    <h1 className='text-xl font-bold'>quantity: <span>{quantity}</span></h1>
                    <h1 className='text-xl font-bold'>rating: <span>{rating}</span></h1>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;