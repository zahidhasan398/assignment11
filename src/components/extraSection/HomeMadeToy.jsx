import React, { useEffect, useState } from 'react';

const HomeMadeToy = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("homemade.json")
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-4xl font-extrabold text-center my-10'>child Invention toy</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6'>
                {
                    toys.map(toy => <>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{toy.name}</h2>
                                <h2 className="card-title">child name: {toy.childname}</h2>

                                <p>{toy.description}</p>
                            </div>
                            <figure><img src={toy.photo} alt="Shoes" className='h-[40vh]' /></figure>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default HomeMadeToy;