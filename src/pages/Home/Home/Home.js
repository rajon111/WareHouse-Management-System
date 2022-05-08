import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeInventory from '../HomeInventory/HomeInventory';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='relative bg-blue-50'>
            <Banner/>
            <HomeInventory></HomeInventory>
            <div className='text-center'>
                <button className='btn btn-danger my-5' onClick={()=>navigate('/manage')}> Manage Inventories</button>
            </div>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;