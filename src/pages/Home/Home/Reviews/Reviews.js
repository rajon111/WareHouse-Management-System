import React from 'react';
import pic1 from '../../../../images/pic1.jpg'
import pic2 from '../../../../images/pic2.jpg'
import pic3 from '../../../../images/pic3.jpg'

const Reviews = () => {
    return (
        <div>
            <p className='text-4xl text-center'>Our Happy Clients</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className='flex flex-col justify-center items-center p-10'>
                    <img className='' src={pic1} alt="" />
                    <p className='px-5 py-2'>On top of our freight shipping services, we also offer transportation management software, logistics consulting, warehousing, and a wide range of other logistics services.</p>
                    <p><small>JIMMY SPENSE | U.S MARSHAL </small></p>
                </div>
                <div className='flex flex-col justify-center items-center p-10' >
                    <img src={pic2} alt="" />
                    <p className='px-5 py-2'>In the fast-paced and overwhelming world of logistics, you need a partner who is flexible and poised to support your constantly evolving needs.</p>
                    <p><small>MARTINE CRANE | INVENTIGATOR </small></p>
                </div>
                <div className='flex flex-col justify-center items-center p-10'>
                    <img src={pic3} alt="" />
                    <p className='px-5 py-2'>All the Great things are simple,and many can be expressed in a single word Just sit back and focus on your core business – and we’ll get your product where it needs to go, no matter what.</p>
                    <p><small>SAMUELS CRANE | SECRETERY </small></p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;