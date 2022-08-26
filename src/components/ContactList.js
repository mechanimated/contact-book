import React from "react";
import {useState} from "react"
import Contact from "./Contact";

// Passes down individual object data to contact component.
function ContactList({ reRender, handleDelete, contacts }) {

// Declares state and function for displaying on-click information.
  const [details, setDetails] = useState([])

  function showContact(event, contact) {
   setDetails(contact)
  }

// Passes down props, maps and displays pulled data from on-clicks in child.
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
            Contacts
          </th>
          <th>
            See More
          </th>
          <th>
           Add To Favorites
          </th>
          <th>
           Remove Contact
          </th>
        </tr>
        {contacts?.map((contact, buttcheeks) => {
          return (
          <Contact reRender={reRender} handleDelete={handleDelete} contact={contact}  
                   id={contact.id} key={buttcheeks} showContact={showContact} />
        )})}
      </tbody>
    </table>
    </div>
  );
}

export default ContactList;
