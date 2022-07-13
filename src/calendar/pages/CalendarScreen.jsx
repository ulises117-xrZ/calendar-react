import React from 'react'
import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import { Navbar, CalendarEvent, CalendarModal } from '../'
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMensajesEs, localizer } from '../../helpers';


const events = [
    {
        title: "El cumple de Edwin",
        note: "hay que comprar pastelazo",
        start: new Date(),
        end: addHours(new Date(), 1),
        user: {
            _id: '123',
            nombre: "Marcos"
        }
    }

]
export const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: "#ff9900",
            borderRadius: "0px",
            opacity: "0.8",
            color: "white"
        }
        return {
            style
        }
    }

    const onDoubleClick = (event)=>{
        console.log({doubleClick: event});
    }   

    const onSelect = (event)=>{
        console.log({click: event});
    }

    const onViewChanged = (event)=>{
        console.log({viewChanged: event});
        localStorage.setItem('lastView', event);
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                style={{ height: 'calc( 100vh - 80px )' }}
                messages={getMensajesEs()}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent = {onDoubleClick}
                onSelectEvent = {onSelect}
                onView = {onViewChanged}
            />
            <CalendarModal />
        </>
    )
}

