import React from 'react'
import FavoriteContactList from "./FavoriteContactList"
import FavoriteSearch from "./FavoriteSearch"
import { useState, useEffect } from 'react'

export default function PassThrough() {
    const [render, reRender] = useState(true)
    const [search, setSearch] = useState('')
    const [faveContacts, setFaveContacts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/favorites`)
            .then(res => res.json())
            .then(data => {
                setFaveContacts(data)
            })
    }, [render])


    function handleFaveDelete(id) {
        const newFavedContacts = faveContacts.filter((contact) => contact.id !== id)
        setFaveContacts(newFavedContacts)
    }

    let list = faveContacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <div >
                <FavoriteSearch search={setSearch}/>
                <FavoriteContactList faveContacts={list} reRender={reRender} handleFaveDelete={handleFaveDelete} />
            </div>

        </div>
    );
}

