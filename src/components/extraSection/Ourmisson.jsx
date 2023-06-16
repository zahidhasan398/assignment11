import React from 'react';
import { FaTwitter, FaRocket, FaGrav } from "react-icons/fa";

const Ourmisson = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-5xl font-extrabold my-20 text-center'>Why children play with toy</div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div className="card w-full bg-primary text-primary-content">
                    <div className="card-body">
                        <FaTwitter className='text-5xl'></FaTwitter>
                        <h2 className="card-title">
                            entertainment
                        </h2>
                        <p>Video games, board games, puzzles, and toys that provide entertainment and encourage learning </p>

                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content" >
                    <div className="card-body">
                        <FaRocket className='text-5xl'></FaRocket>
                        <h2 className="card-title">
                            growth invention idea
                        </h2>
                        <p>Provide a Variety of Toys: Offer a diverse selection of toys that stimulate different areas of interest and skills. Building blocks, construction sets, art supplies, scientific kits, and imaginative play toys can all spark creativity and innovation </p>

                    </div>
                </div>
                <div className="card w-full bg-primary text-primary-content" >
                    <div className="card-body">
                        <FaGrav className='text-5xl'></FaGrav>
                        <h2 className="card-title">
                            devolope mentality
                        </h2>
                        <p>Toys provide an outlet for children to explore their imagination and develop creative thinking skills. They can invent stories, role-play, and create new scenarios, fostering innovation and problem-solving abilities.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourmisson;