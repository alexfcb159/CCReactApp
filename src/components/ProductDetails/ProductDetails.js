import React, {useState} from 'react';
import './ProductDetails.css'

function ProductDetails() {
    const [selectedImg, setSelectedImg] = useState(0);

    const images = [
        'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_1-730x730.jpg',
        'https://lowdaily.ru/wp-content/uploads/2023/06/lowdaily-sunglasses-retro_4-730x730.jpg'
    ];

    return (
        <div className='productDetails'>
            <div className='picture__side'>
                <div className='images'>
                    <img className='img' src={images[0]} onClick={e=>setSelectedImg(0)}/>
                    <img className='img' src={images[1]} onClick={e=>setSelectedImg(1)}/>
                </div>
                <div className='mainImg'>
                    <img className='main__Img'src={images[selectedImg]}/>
                </div>
            </div>
            <div className='info__side'></div>
        </div>
    );
}

export default ProductDetails;

