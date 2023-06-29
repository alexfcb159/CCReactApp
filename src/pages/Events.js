import React from 'react';
import '../App.css';
import MyCalendar from "../components/MyCalendar/MyCalendar";

function Events () {
    return (
        <>
            <h1 className='events'>EVENTS</h1>
            <MyCalendar />
        </>
    )
}

export default Events;
