import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeInventory from '../HomeInventory/HomeInventory';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='relative'>
            <Banner/>
            <HomeInventory></HomeInventory>
            <div className='text-center'>
                <button className='btn btn-danger my-5' onClick={()=>navigate('/manage')}> Manage Inventories</button>
            </div>
            <p>EXTRA 2 SECTION HAVE TO ADD</p>
        </div>
    );
};

export default Home;