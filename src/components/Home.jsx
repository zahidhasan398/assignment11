import React from 'react';
import Banner from './Banner';

import TabsItems from './TabsItems';
import GalleryToy from './GalleryToy';
import HomeMadeToy from './extraSection/HomeMadeToy';
import Ourmisson from './extraSection/Ourmisson';
import UseTitle from './UseTitle';

const Home = () => {
    UseTitle("home");
    return (
        <div>
            <Banner></Banner>
            <GalleryToy></GalleryToy>
            <div className='text-5xl font-bold text-center my-10'>Shop by category</div>
            <TabsItems></TabsItems>
            <HomeMadeToy></HomeMadeToy>
            <Ourmisson></Ourmisson>
        </div>
    );
};

export default Home;