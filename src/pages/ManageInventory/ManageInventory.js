import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts([])
    const navigate = useNavigate()

    const handleDelete = id =>{
        const proceed =  window.confirm('Are you sure to remove ?')
        if(proceed){
            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                toast('Item Deleted')
            })
        }
    }

    return (
        <div>
            <h2 className='my-3 text-center text-3xl'>Manage inventories </h2>
            <div className='container border-2'>
                <table class="table ">
                    <thead>
                        <tr>
                        <th scope="col">Product Name</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Description</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => 
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td className='flex justify-center'><img style={{ height: '30px', width: '50px'}} src={product.picture} alt="" /> </td>
                                    <td>{product.description}</td>
                                    <td>{product.supplier}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td><button className='text-danger font-bold' onClick={() => handleDelete(`${product._id}`)} >X</button></td>
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