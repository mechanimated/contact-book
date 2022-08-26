import React from "react";
import Contact from "./Contact";
import {useState} from "react"


function ContactList({contacts, handleDelete, saveContact, reRender}) {
  const [details, setDetails] = useState([])
  function showContact(event, contact) {
   setDetails(contact)
  
  }
  console.log(details)
  return (
    <div>
      <div>
        <ul>
        <li><h3>{details.name}</h3></li>
        <li><h5>{`Notes: `}</h5>{details.description}</li>
        <li><h5>{`Phone Number: `}</h5>{details.number}</li>
        </ul>
        </div>
        
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Contacts</h3>
          </th>
          <th>
            <h3>See More</h3>
          </th>
          <th>
            <h3>Add To Favorites</h3>
          </th>
          <th>
            <h3>Remove Contact</h3>
          </th>
        </tr>
        {contacts?.map((contact, buttcheeks) => {
          return (
          <Contact reRender={reRender} contact={contact}  id={contact.id} key={buttcheeks} 
                   saveContact={saveContact} handleDelete={handleDelete} showContact={showContact} />
        )})}
      </tbody>
    </table>
    </div>
  );
}

export default ContactList;
