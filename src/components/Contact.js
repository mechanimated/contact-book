import React from "react";
import { useState} from 'react'

function Contact({contact, showContact, handleDelete, id, reRender}) {

  function deleteContact() {
    fetch(`http://localhost:3000/contacts/${id}`,{
      method: 'DELETE'
    }).then(res=>res.json()).then(() => { 
      handleDelete(id)
      reRender((render=>!render))
    }) 
    .catch(err => console.log(err))
    
  }

 


  const [fave, setFave] = useState({
    id: '',
    name: contact.name,
    description: contact.description,
    number: contact.number
  })

  function saveContact(event) {
   

    fetch(`http://localhost:3000/favorites`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fave),
    }).then(
      reRender((render=>!render))

    )}

    
 return (
 
  
    <tr>
      <td>
        {contact.name}
      </td>
      <td>
      <button style={{ background: 'transparent', border: 'none' }} onClick={((e) => showContact(e, contact))}>🔍</button>
      </td>
      <td><button style={{ background: 'transparent', border: 'none' }} onClick={((e) => saveContact(e, contact))}>💾</button></td>
      <td>
        <button style={{ background: 'transparent', border: 'none' }} onClick={deleteContact}>X</button>
      </td>
    </tr>
 

  );
}

export default Contact;