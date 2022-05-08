import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useItem from '../Hooks/useItem';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [product, setProduct] = useItem(id)

    const handleDelivered = event => {
        const total = parseInt(product.quantity)
        const manage = total - 1
        const quantity = { manage }

        const url = `https://warm-river-80956.herokuapp.com/inventory/${ id }`
        fetch(url, {
            method: 'put',//update or add
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Delivered')

            })
    }

    const handleRestock = event => {
        event.preventDefault()
        const quan = parseInt(product.quantity)
        const total = parseInt(event.target.q.value)
        const manage = quan + total
        const quantity = { manage }

        const url = `https://warm-river-80956.herokuapp.com/inventory/${ id }`
        fetch(url, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Quantity Updated')
                event.target.reset()
            })

    }

    return (
        <div className='md:w-1/2 mx-auto my-2 sm:w-full'>
            <form className='flex flex-col mb-4 px-3' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center text-2xl m-2'>Inventory</h2>
                <div><img style={{ height: '300px ', width: '100%' }} src={product.picture} alt="" /></div>
                <input placeholder='ID' value={id} className='border p-2 mb-2 ' {...register("id", { required: true })} />
                <input placeholder='Name' value={product.name} className='border p-2 mb-2 ' {...register("name", { required: true })} />
                <input placeholder='Description' value={product.description} className='border p-2 mb-2' {...register("description")} />
                <input placeholder='Supplier' value={product.supplier} className='border p-2 mb-2'{...register("supplier")} />
                <input placeholder='Price' value={product.price} className='border p-2 mb-2'  {...register("price")} />
                <input placeholder='sold' value={product.sold} className='border p-2 mb-2' type="number" {...register("sold")} />
                <input placeholder='Quantity' value={product.quantity} className='border p-2 mb-2' type="number" {...register("quantity")} />
                <input className='border p-2 mb-2 btn bg-primary text-white' onClick={handleDelivered} type="submit" value='Deliverd' />

            </form>

            <form onSubmit={handleRestock}>
                <div className='text-center'>
                    <input className='border pl-40 pt-2 pb-2 mb-2 d-block mx-auto w-50' type='number' name='q' placeholder='Quantity' />
                    <input className='border p-2 btn bg-primary text-white d-block mx-auto w-50' type="submit" value="Restock" />
                </div>
            </form>

        </div>
    );
};

export default Inventory;