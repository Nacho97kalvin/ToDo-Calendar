import React from 'react'
import firebase from 'firebase'
import './Note.css'

function Note({ id, Evento, desc }) {

    const Borrar = () => {
        const fb = firebase.database().ref('Notas')
        const dbref = fb.child(`${id}`)
        dbref.remove()
    }

    return (
        <div className="Note">
            <div className='Note__1'>
                <span className='Note__titulo'>{Evento}</span>
                <button onClick={Borrar} className='Note__btn'>X</button>
            </div>
            <span className='Note__descripcion'>{desc}</span>
        </div>
    )
}

export default Note
