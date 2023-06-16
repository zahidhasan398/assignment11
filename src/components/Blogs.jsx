import React from 'react';
import UseTitle from './UseTitle';

const Blogs = () => {
    UseTitle("blogs");
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='bg-red-400 rounded-xl my-5'>
                <h1 className='text-2xl text-green-700 my-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>access token is represents user authorization granted to client application ,this is string here have some information.refresh token is used for does user session expired or not.token has some information.we should not store it on localstoraje ,we should store on cookie.it is not best practise but its save than localstoraje.</p>
            </div>
            <div className='bg-red-400 rounded-xl my-5'>
                <h1 className='text-2xl text-green-700 my-2'>Compare SQL and NoSQL databases?</h1>
                <h1>sql datbase are relational with table but nosql database is not relation with table.no sql database store with json format.i think no sql database is better than sql database because it is relational database but no sql database non relation with table.so its more flexible and non complex</h1>
            </div>
            <div className='bg-red-400 rounded-xl my-5'>
                <h1 className='text-2xl text-green-700 my-2'>What is express js? What is Nest JS ?</h1>
                
                <h1>express js is a flexible framework for backend side.nextjs is new framework.next js is also run on nodejs it is strongly make for server side application.</h1>
            </div>
            <div className='bg-red-400 rounded-xl my-5'>
                <h1 className='text-2xl text-green-700 my-2'>What is MongoDB aggregate and how does it work?</h1>
                <h1>aggregation operation process data records and return computed result.if we want to get total length of array we use map.but if we use countDocuments() on server side we get same results and count data of an array.  </h1>
            </div>
            
        </div>
    );
};

export default Blogs;