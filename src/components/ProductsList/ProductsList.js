import React from 'react';
import './ProductsList.css';
import ProductSmall from "../ProductSmall/ProductSmall";

function ProductsList() {
    const data = [
        {
            id: 1,
            img: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_1-730x730.jpg',
            img2: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_4-730x730.jpg',
            title: "Sunglasses",
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_1-730x730.jpg',
            img2: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_4-730x730.jpg',
            title: "Sunglasses",
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_1-730x730.jpg',
            img2: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_4-730x730.jpg',
            title: "Sunglasses",
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_1-730x730.jpg',
            img2: 'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_4-730x730.jpg',
            title: "Sunglasses",
            oldPrice: 19,
            price: 12
        },
    ]

    return (
        <div className='productsList'>
            {data.map(item => {
                return <ProductSmall item={item} key={item.id}/>
            })}
        </div>
    );
}

export default ProductsList;