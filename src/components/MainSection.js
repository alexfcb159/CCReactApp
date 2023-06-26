import React from 'react';
import '../App.css';
import { Button } from "./Button";
import './MainSection.css';


function MainSection() {
    return (
        <div className='main-container'>
            <video src='/videos/cars1.mp4' autoPlay loop muted />
            <h1>Discover the Thrill of Car Culture</h1>
            <p>Join our vibrant community of car enthusiasts and explore the world of powerful, tuned, and breathtaking automobiles. Get ready to ignite your passion for cars like never before! </p>
            <div className='main-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Explore Events
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Shop Merch
                </Button>
            </div>
        </div>
    )
}

export default MainSection;
