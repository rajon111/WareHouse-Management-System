import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../Hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrder] = useState([])

    const [products, setProducts] = useProducts([])
    const navigate = useNavigate()

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email

            const url = `https://warm-river-80956.herokuapp.com/myitems?email=${ email }`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${ localStorage.getItem('accessToken') }`
                    }
                })
                setOrder(data)
            }

            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user, orders, products])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to remove?')
        if (proceed) {
            const url = `https://warm-river-80956.herokuapp.com/delete/${ id }`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data)
                    toast('Item deleted')
                })
        }
    }

    return (
        <div>
            <h3 className='my-4 text-center text-2xl'>My item : {orders.length}</h3>
            <div className='flex flex-col justify-center items-center gap-1'><img className='h-10 rounded-xl' src={user.photoURL} alt="" />
                <p>{user.displayName}</p>
            </div>
            <div className='container border-2 mt-2'>
                {
                    <table className="table ">
                        <thead>
                            <tr>
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
                            orders.map(product =>

                                <tbody>
                                    <tr>
                                        <td >{product.name} </td>
                                        <td className='flex justify-center' ><img style={{ height: '30px', width: '50px' }} src={product.picture} alt="" /> </td>
                                        <td>{product.description}</td>
                                        <td>{product.supplier}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.sold}</td>
                                        <td><button className='text-danger font-bold' onClick={() => handleDelete(`${ product._id }`)} >X</button></td>
                                    </tr>
                                </tbody>

                            )
                        }

                    </table>
                }
            </div>
        </div>
    );
};

export default MyItems;