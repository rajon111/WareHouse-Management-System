import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProducts([])
    const navigate = useNavigate()

    return (
        <div>
            <h2 className='my-3'>Manage inventories </h2>
            <div>
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
                                    {/* <td><button className='text-danger font-bold' onClick={() => handleDelete(`${product._id}`)} >X</button></td> */}
                                </tr> 

                            </tbody>)   
                    }
                </table>
            </div>

        </div>
    );
};

export default ManageInventory;