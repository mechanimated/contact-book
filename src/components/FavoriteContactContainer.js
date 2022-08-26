import React from 'react'
import FavoriteContactList from "./FavoriteContactList"
import { useState, useEffect } from 'react'

export default function PassThrough() {
    const [render, reRender] = useState(true)
    const [faves, setFaves] = useState([])
    const [faveContacts, setFaveContacts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/favorites`)
            .then(res => res.json())
            .then(data => {
                setFaves(data)
                setFaveContacts(data)
            })
    }, [render])


    function handleFaveDelete(id) {
        const newFavedContacts = faveContacts.filter((contact) => contact.id !== id)
        setFaveContacts(newFavedContacts)
    }


    return (
        <div>
            <div >
                <FavoriteContactList faveContacts={faveContacts} reRender={reRender} handleFaveDelete={handleFaveDelete} />
            </div>

        </div>
    );
}

