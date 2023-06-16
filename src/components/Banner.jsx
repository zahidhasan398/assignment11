import React, { useEffect } from 'react';
 import Aos from "aos";
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/183766095/photo/old-race-cars-that-were-fun-for-about-5-mins.jpg?b=1&s=170667a&w=0&k=20&c=JOcY1hYLihRORELvqnYmQzIA5_dU_wH4oj9YAKCohzU=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">wellcome to our toy market</h1>
                    <p className="mb-5">Car Toys was founded in 1987 by Dan Brettler, who continues as the President and CEO of Car Toys. The company has a Board of Directors though shares are not publicly traded. In 2004, Twice Magazine ranked Car Toys as the 5th largest national mobile electronic retailer</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;