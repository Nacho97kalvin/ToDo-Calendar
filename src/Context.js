import React, { createContext, useState } from 'react'

export const Contexto = createContext();
export const ContextoEvento = createContext();
export const ContextoDesc = createContext();

export const DateProvider = ({ children }) => {
    let fecha = new Date()
    let DateFormat = fecha.getFullYear() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getDate();
    const [date, SetFecha] = useState(DateFormat)
    const [Evento, setEvento] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <Contexto.Provider value={[date, SetFecha]}>
            <ContextoEvento.Provider value={[Evento, setEvento]}>
                <ContextoDesc.Provider value={[desc, setDesc]}>
                    {children}
                </ContextoDesc.Provider>
            </ContextoEvento.Provider>
        </Contexto.Provider>
    );
}
