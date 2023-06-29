import React from 'react';
import CardItem from "../CardItem/CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>EVENTS CALENDAR</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/meetup.jpg'
                            text='Join the ultimate car meet-up. Rev up the excitement!'
                            label='Meet-Up'
                            path='/events'
                        />
                        <CardItem
                            src='images/race.jpg'
                            text='Feel the adrenaline rush. Race with the pros!'
                            label='Race'
                            path='/events'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/exhibition.jpg'
                            text='Experience the art of automotive stance.'
                            label='Exhibition'
                            path='/events'
                        />
                        <CardItem
                            src='images/nightride.jpg'
                            text='Embrace the thrill of the night, let the city guide you.'
                            label='Night Ride'
                            path='/events'
                        />
                        <CardItem
                            src='images/coffee.jpeg'
                            text='Sip coffee, talk cars, and fuel your passion.'
                            label='Cars&Coffee'
                            path='/events'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;