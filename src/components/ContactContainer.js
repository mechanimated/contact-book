import React from "react";
import { useState, useEffect } from 'react'
import ContactList from "./ContactList";
import Search from "./Search"

// Stores entirety of contact lists display.
function ContactContainer() {

// Declares appropriate states for children.
    const [contacts, setContacts] = useState([])

    const [search, setSearch] = useState('')
    const [render, reRender] = useState(true)

// Fetches from 'contacts' half of database, passes data.
    useEffect(() => {
        fetch(`http://localhost:3000/contacts`)
            .then(res => res.json())
            .then(data => {
                setContacts(data)
            })
// Conditional re-render to keep page auto-updated on change.
    }, [render])

// Deletes data by matching id and resets state to new data.
    function handleDelete(id) {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)    
    }

// Auto-sorts list by appropriately adjusted and compared value entered into search bar.
    let list = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))

// Displays the contact list and search bar, passes down props.
    return (
        <div>
                <Search search={setSearch}/>
                <ContactList reRender={reRender} handleDelete={handleDelete} contacts={list} />
        </div>
    );
}

export default ContactContainer;
