import React from 'react';
import '../../App.css';
import './Merch.css';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';

function Merch () {
    const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            <h1 className='merch'>MERCH</h1>
            <div className='products__container'>
                <div className='products__wrapper'>
                    <ul className='products__items'>
                        {data.data.map(product => (
                            <li className='products__item' key={product.id}>
                                <Link className='products__item__link' to={`/details/${product.id}`}>
                                    <figure className='products__item__pic-wrap' data-category={product.attributes.category.data.attributes.name}>
                                        <img src={`http://localhost:1337${product.attributes.pic.data[1].attributes.url}`} className='products__item__img'/>
                                    </figure>
                                    <div className='products__item__info'>
                                        <h5 className='products__item__title'>{product.attributes.title}</h5>
                                        <h5 className='products__item__price'>$ {product.attributes.price}</h5>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Merch;