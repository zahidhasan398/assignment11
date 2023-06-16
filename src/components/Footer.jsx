import React from 'react';
import { FaFacebook, FaMobileAlt,FaCar, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black w-full        h-[40vh] text-white py-10 mt-20'>
            <div className='md:flex md:items-center md:justify-center gap-14'>
                <div>
                    <h1 className='text-2xl font-bold'>contuct us:</h1>
                    <h1><FaMobileAlt></FaMobileAlt> <span>017839-20943</span></h1>
                    <h1><FaFacebook></FaFacebook> <span>zahid hasan</span></h1>
                    <h1><FaGoogle></FaGoogle>
                    <span>zahidhasan@gmail.com</span></h1>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>you can order from</h1>
                    <h1>china</h1>
                    <h1>Bangladesh</h1>
                    <h1>usa</h1>
                    <h1>uk</h1>
                    <h2>itali</h2>
                </div>
                <div>
                    <FaCar className='text-9xl'></FaCar>
                </div>
            </div>
        </div>
    );
};

export default Footer;