import React, { createContext, useState, useEffect } from 'react'

import apiService from '../service/dataProvider'

export const ClientContext = createContext([])

export function ClientProvider({ children }) {

    const [clients, setClients] = useState([])

    const [index,setIndex] = useState(0)

    useEffect(() => {
   
        apiService.getAll('/client').then(res =>{
            setClients(res.data)
        })

    }, []);

    const findClient =  (id) =>{
        //find in list
        let client = clients.find( c =>{
            return c.id = id
        })
        
        return client
    }

    const findIndexClient =  (id) =>{
        let client = findClient(id)

        return clients.indexOf(client)
    }

    return (
        <ClientContext.Provider
            value={
                {
                    clients,
                    findClient,
                    findIndexClient
                }
            }
        >
            {children}
        </ClientContext.Provider>
    )
}