import React from 'react';
import './MyCalendar.css';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import { useDispatch, useSelector } from 'react-redux';

function MyCalendar() {
    const dispatch = useDispatch();
    const initialView = useSelector(state => state.initialView);

    const dayGridMonth = () => {
        dispatch({type: 'MONTH_VIEW', payload: 'dayGridMonth'})
    };
    const listYear = () => {
        dispatch({type: 'LIST_VIEW', payload: 'listYear'})
    };

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
                initialView={initialView}
                viewDidMount={
                    function(arg) {
                        if (arg.view.type === 'dayGridMonth') {
                            dayGridMonth()
                        } else if (arg.view.type === 'listYear') {
                            listYear()
                        }
                    }
                }
            />
        </div>
    )
}

export default MyCalendar;