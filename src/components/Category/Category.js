import React from 'react';
import { Link } from "react-router-dom";

function Category(props) {
    return (
        <>
            <li className='categories__item'>
                <Link className='categories__item__link' to={props.path}>
                    <figure className='categories__item__pic-wrap'>
                        <img src={props.src} alt='Car Image' className='categories__item__img'/>
                        <span className='label'>{props.label}</span>
                    </figure>
                </Link>
            </li>
        </>
    )
}

export default Category;