import React, { useContext, useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction";
import { Contexto } from './Context';
import firebase from 'firebase'
import './calendar.css'

function Calendar() {

    const [date, SetFecha] = useContext(Contexto)
    const [name, setName] = useState([])

    useEffect(() => {
        firebase.database().ref().on('value', (snapshot) => {
            let obj = snapshot.val()
            let arr = []
            Object.values(obj.Notas).forEach(e => {
                arr.push({ title: e.evento, date: e.fecha })
            });
            setName(arr)
        })
    }, []);

    const DateClick = React.useCallback((arg) => {
        SetFecha(arg.dateStr);
    }, [SetFecha]);


    return (
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={DateClick}
            events={name}
        />
    )

}

export default Calendar
