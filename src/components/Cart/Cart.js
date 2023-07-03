import React from 'react';
import './Cart.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://lowdaily.ru/wp-content/uploads/2021/05/Pin-bmw-e36-m3-ltw-1170x730.jpg',
            title: 'pin',
            desc: 'some description',
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]

    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            <div className='item' key={data[0].id}>
                <img src={data[0].img} />
                <div className='details'>
                    <h1>{data[0].title}</h1>
                    <p>{data[0].desc.substring(0, 10)}</p>
                    <div className='price'>1 x {data[0].price}</div>
                </div>
                <DeleteOutlineOutlinedIcon className='delete' />
            </div>
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    );
}
