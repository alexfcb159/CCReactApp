import React from 'react';
import './MyCalendar.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';

function MyCalendar() {
    return (
        <div className='calendar'>
            <FullCalendar
                plugins={[googleCalendarPlugin, dayGridPlugin, listPlugin]}
                googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY}
                events={{googleCalendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID}}
                headerToolbar={{
                    start: 'prev,next today',
                    center: 'title',
                    end: 'dayGridMonth,listYear'
                }}
                firstDay={1}
            />
        </div>
    )
}

export default MyCalendar;