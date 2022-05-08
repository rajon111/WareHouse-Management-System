import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Zoom from 'react-reveal/Zoom';

const ManageInventory = () => {
    const [products, setProducts] = useProducts([])
    const navigate = useNavigate()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to remove ?')
        if (proceed) {
            const url = `https://warm-river-80956.herokuapp.com/delete/${ id }`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item Deleted')
                })
        }
    }

    return (
        <div>
            <Zoom left>

                <h2 className='my-3 text-center text-3xl'>Manage inventories </h2>
            </Zoom>
            <div className='container border-2'>
                <table className="table ">
                    <thead>
                        <tr className='grid md:grid-cols-8 sm:grid-cols-1'>
                            <th scope="col">Product Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Description</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        products.map(product =>
                            <tbody key={product._id}>
                                <tr className='grid md:grid-cols-8 sm:grid-cols-1'>
                                    <td>{product.name}</td>
                                    <td className='flex justify-center'><img style={{ height: '50px', width: '70px' }} src={product.picture} alt="" /> </td>
                                    <td>{product.description}</td>
                                    <td>{product.supplier}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.sold}</td>
                                    <td><button className='text-danger font-bold' onClick={() => handleDelete(`${ product._id }`)} >X</button></td>
                                </tr>

                            </tbody>)
                    }
                </table>
            </div>
            <div className='text-center '>
                <button className='btn btn-primary my-4' onClick={() => navigate('/newitem')} >Add New Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;