import React from "react";
import FavoriteContact from "./FavoriteContact";
import { useState } from 'react'

function FavoriteContactList({ faveContacts, handleFaveDelete, reRender }) {

  const [details, setDetails] = useState([])
  function showContact(event, contact) {
   setDetails(contact)
  
  }

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
            <h3>Remove Contact</h3>
          </th>
        </tr>
        {faveContacts?.map((faveContact, buttcheeks) => {
          return (
            <FavoriteContact showContact={showContact} reRender={reRender} faveContact={faveContact} id={faveContact.id}
              key={buttcheeks} handleFaveDelete={handleFaveDelete} />
          )
        })}
      </tbody>
    </table>
    </div>
  );
}

export default FavoriteContactList;
