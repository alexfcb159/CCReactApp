import React, {useState} from 'react';
import './CategoryProducts.css';
import ProductsList from "../ProductsList/ProductsList";
import {useParams} from "react-router-dom";

function CategoryProducts () {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className='products'>
            <div className='filters'>
                <div className='filter__item'>
                    <h2>Product Categories</h2>
                    <div className='input__item'>
                        <input type='checkbox' id='1' value={1}/>
                        <label htmlFor='1'>Accessories</label>
                    </div>
                    <div className='input__item'>
                        <input type='checkbox' id='2' value={2}/>
                        <label htmlFor='2'>Hoodies</label>
                    </div>
                    <div className='input__item'>
                        <input type='checkbox' id='3' value={3}/>
                        <label htmlFor='3'>Keychains</label>
                    </div>
                </div>
                <div className='filter__item'>
                    <h2>Filter by price</h2>
                    <div className='input__item'>
                        <span>0</span>
                        <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filter__item'>
                    <h2>Sort by</h2>
                    <div className='input__item'>
                        <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='input__item'>
                        <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort("desc")}/>
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='productsList'>
                <ProductsList catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}

export default CategoryProducts;