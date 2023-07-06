import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/api/products/' + id);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data.data)

    return (
        <div>
            <h1>Product Details</h1>
            <h2>Page Under Construction...</h2>
            <div className='product__card'>
                <div className='title__price'>
                    <h2>{data.data.attributes.title}</h2>
                    <div className='price'>$ {data.data.attributes.price}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;