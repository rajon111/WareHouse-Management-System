import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck,faExchange,faHeadset } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className='container'>
        <h2 className='py-2 text-4xl text-center'>Services</h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 py-5 items-center'>
            <div>
               <FontAwesomeIcon className='text-5xl mb-2 ml-20' icon={faTruck}></FontAwesomeIcon>
                
                <h4>FAST,FREE SHIPPING</h4>
                <p>Orders over Tk.2000 ship for free</p>
            </div>
            <div>
              <FontAwesomeIcon className='text-5xl mb-2 ml-20' icon={faExchange}></FontAwesomeIcon>
                
                <h4>EXCHANGE FROM ANY STORE</h4>
                <p>You can exchange from any apex owned retail stores across Bangladesh within 15 days from the date of purchase</p>
            </div>
            <div>
            <FontAwesomeIcon className='text-5xl mb-2 ml-10' icon={faHeadset}></FontAwesomeIcon>
               
                <h4>CUSTOMER CARE</h4>
                <p>Call +8801613900027</p>
                <p>10.00am-6pm(Everyday)</p>
            </div>
        </div>
    </div>
    );
};

export default Services;