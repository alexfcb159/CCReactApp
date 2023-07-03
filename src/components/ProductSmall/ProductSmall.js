import React from 'react';
import './ProductSmall.css';
import {Link} from "react-router-dom";

function ProductSmall({item}) {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='productSmall'>
                <div className='image'>
                    <img src={item.img} className='mainImg' />
                    <img src={item.img2} className='secondImg' />
                </div>
                <h2>{item.title}</h2>
                <div className='prices'>
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ProductSmall;