import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { addCart } from '../redux/action/index';
import SimpleRating from './Rating';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);



    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }




    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https:/fakestoreapi.com/products/${id}`);
            let data = await response.json();
            setProduct(data);
            console.log(data);
            setLoading(false);
        }
        getProduct();
    }, []);
    let { HandleCart } = useSelector((e) => e);
    console.log(HandleCart);
    const Loading = () => {
        return (
            <>
                <div className='col-md-6 style={{lineHeight:2}} '>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        //console.log(ShowProduct);
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <SimpleRating />
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='led'>{product.description}</p>
                    {HandleCart.some((e)=>e.id==product.id)?'':<button className='btn btn-outline-dark px-4 py-2'
                        onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>}
                    
                    {HandleCart.length > 0 ? <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                        Go to Cart
                    </Link> : ''

                    }

                </div>
            </>
        )
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>

            </div>
        </div>
    );
};

export default Product;
