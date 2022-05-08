import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id,name,picture,description,price,quantity,supplier,sold}=product
    const navigate=useNavigate()
   
    return (
        <div className='product flex flex-col justify-center items-center p-5'>
           <div className='flex justify-center'>
               <img className='rounded-t-xl  w-full h-full' src={picture} alt="" />
            </div>
            <div className='flex flex-col text-left justify-center leading-3 mb-4 botom font-semibold'>
        
                <p className='text-success mt-4 text-lg'>Name: {name}</p>
                <p className='m-2 leading-4'>Description:  {description.slice(0,30)}</p>
                <p className='m-2'>Supplier: {supplier}</p>
                <p className='m-2'>Price: $<span>{price}</span> </p>
                <p className='m-2'>Quantity: {quantity}</p>
                <p className='m-2'>Sold: {sold}</p>
                <button className='btn btn-primary mt-2' onClick={()=>navigate(`/inventory/${_id}`)}>Update</button>
            </div>
        </div>
    );
};

export default Product;