import React, { useEffect, useState } from 'react';

const GalleryToy = () => {
    const [galleryImage,setGalleryImage]=useState([]);
    useEffect(()=>{
        fetch('Galery.json')
        .then(res=>res.json())
        .then(data=>setGalleryImage(data))
    },[])
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <div className='font-extrabold text-4xl my-5 text-center'>toy gallery</div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        galleryImage.slice(0,3).map(toyImg=><div key={toyImg.id}>
                            <img src={toyImg?.photoUrl} className='w-full h-[40vh]' data-aos="zoom-in" alt="" />
                        </div>)
                    }
                </div>
                <div><img src={galleryImage[3]?.photoUrl} className='w-full h-[70vh] my-5' alt="" data-aos="zoom-in" /></div>
            </div>
        </div>
    );
};

export default GalleryToy;