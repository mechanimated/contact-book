import React from "react";
import ContactList from "./ContactList";
import Search from "./Search"
import { useState, useEffect } from 'react'



function ContactContainer() {
    const [contacts, setContacts] = useState([])

    const [search, setSearch] = useState('')
    const [render, reRender] = useState(true)




    useEffect(() => {
        fetch(`http://localhost:3000/contacts`)
            .then(res => res.json())
            .then(data => {
                setContacts(data)
            

            })

    }, [render])


    function handleDelete(id) {
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
       
    }


    let list = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()))


    return (
        <div>
           
                <Search search={setSearch}/>
                <ContactList contacts={list} reRender={reRender} handleDelete={handleDelete} />
         

        </div>
    );
}



export default ContactContainer;
