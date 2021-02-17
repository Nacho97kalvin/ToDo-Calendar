import React, { useRef } from 'react';
import { useContext, useEffect } from 'react';
import { Contexto, ContextoDesc, ContextoEvento } from './Context';
import firebase from 'firebase'
import Note from './Note'
import './Notes.css'
import { useState } from 'react';
import Fade from 'react-reveal/Fade'

function Notes() {
    const date = useContext(Contexto)
    const [Evento, setEvento] = useContext(ContextoEvento)
    const [desc, setDesc] = useContext(ContextoDesc)
    const [Nota, setNota] = useState([])
    const input = useRef()
    const textarea = useRef()


    const CargarDatos = (e) => {
        const dbref = firebase.database().ref().child('Notas')
        const push = dbref.push()
        push.set({
            'evento': Evento,
            'descripcion': desc,
            'fecha': date[0].toString()
        })
        input.current.value = ''
        textarea.current.value = ''
    }

    const Ordenar = (keys, prop) => {
        let arr = []
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            arr.push({ id: id, evento: prop[i].evento, desc: prop[i].descripcion, fecha: prop[i].fecha })
        }
        return arr
    }

    useEffect(() => {
        firebase.database().ref('Notas').on('value', (snapshot) => {
            let obj = snapshot.val()
            setNota(Ordenar(Object.keys(obj), Object.values(obj)))
        })
    }, []);


    return (
        <div className="Notes">
            <h1>Notes of the day:</h1>
            <div className="Notes__Note">
                {
                    Nota.filter(e => { return e.fecha === date[0] }).map((n, index) => (
                        <Fade bottom big>
                            <Note key={index} id={n.id} Evento={n.evento} desc={n.desc} />
                        </Fade>
                    ))
                }
            </div>
            <div className="Notes__Send">
                <div className='Notes__info'>
                    <input ref={input} type="text" placeholder='Nombre de Nota' onChange={e => setEvento(e.target.value)} />
                    <textarea ref={textarea} cols="30" rows="10" placeholder='Descripcion de la Nota' onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <div className="Notes__btn">
                    <span> Day: {date[0].split('-').reverse().join('/')}</span>
                    <button onClick={CargarDatos}>Add a Note</button>
                </div>
            </div>
        </div>
    )
}
export default Notes

