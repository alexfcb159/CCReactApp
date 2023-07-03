import React from 'react';
import Category from "../Category/Category";
import './Categories.css';

function Categories () {
    return (
        <div className='categories'>
            <div className='categories__container'>
                <div className='categories__wrapper'>
                    <ul className='categories__items'>
                        <Category
                            src='images/accessories.jpg'
                            label='Accessories'
                            path='/merch/products'
                        />
                        <Category
                            src='images/hoodies.jpg'
                            label='Hoodies'
                            path='/events'
                        />
                        <Category
                            src='images/keychains.jpg'
                            label='Keychains'
                            path='/events'
                        />
                    </ul>
                    <ul className='categories__items'>
                        <Category
                            src='images/models.jpg'
                            label='Models'
                            path='/events'
                        />
                        <Category
                            src='images/forcar.jpg'
                            label='For Car'
                            path='/events'
                        />
                        <Category
                            src='images/tshirts.jpg'
                            label='T-Shirts'
                            path='/events'
                        />
                    </ul>
                    <ul className='categories__items'>
                        <Category
                            src='images/hats.jpg'
                            label='Hats'
                            path='/events'
                        />
                        <Category
                            src='images/stickers.jpg'
                            label='Stickers'
                            path='/events'
                        />
                        <Category
                            src='images/posters.jpg'
                            label='Posters'
                            path='/events'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categories;