import React from 'react';
import web from '../src/images/svg-4.svg';
import Common from './Common';

const Home = () => {
    return (<>
        <Common
            name='Grow your Knowledge with'
            imgsrc={web}
            visit='/service'
            btnName='Get Started'
        />
    </>);

};

export default Home;
