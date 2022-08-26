import React from 'react'
import { useState, useEffect } from 'react'
import FavoriteContactList from "./FavoriteContactList"
import FavoriteSearch from "./FavoriteSearch"

// Stores entirety of favorited contact lists display.
function FavoriteContactContainer() {

// Declares appropriate states for children.
    const [faveContacts, setFaveContacts] = useState([])

    const [search, setSearch] = useState('')
    const [render, reRender] = useState(true)
     
// Fetches from 'favorites' half of database, passes data.
    useEffect(() => {
        fetch(`http://localhost:3000/favorites`)
            .then(res => res.json())
            .then(data => {
                setFaveContacts(data)
            })
// Conditional re-render to keep page auto-updated on change.
    }, [render])

// Deletes data by matching id and resets state to new data.
    function handleFaveDelete(id) {
        const newFavedContacts = faveContacts.filter((contact) => contact.id !== id)
        setFaveContacts(newFavedContacts)
    }

// Auto-sorts list by appropriately adjusted and compared value entered into search bar.
    let list = faveContacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))

// Displays the contact list and search bar, passes down props.
    return (
        <div>
            <div >
                <FavoriteSearch search={setSearch}/>
                <FavoriteContactList reRender={reRender} handleFaveDelete={handleFaveDelete} faveContacts={list} />
            </div>
        </div>
    );
}

export default FavoriteContactContainer;