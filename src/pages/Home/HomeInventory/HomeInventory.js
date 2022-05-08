import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from './Product/Product';
import Fade from 'react-reveal/Fade';

const HomeInventory = () => {
    const [products,setProducts]=useProducts([])

    return (
        <div className='p-2'>
             <Fade left>
            <h2 className='my-3 text-center text-3xl'>Inventories</h2>
            </Fade>
            <hr  className='mb-3'/>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    products.slice(0,6).map(product =><Product key={product._id} product={product}></Product>)
                }
            </div>   
        </div>
    );
};

export default HomeInventory;