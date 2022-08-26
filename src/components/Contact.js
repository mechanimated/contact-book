import React from "react";
import { useState} from 'react'


// Takes terminating props and passes up state data.
function Contact({ reRender, handleDelete, contact, id, showContact }) {

// Permanently deletes data by id of clicked element.
  function deleteContact() {
    fetch(`http://localhost:3000/contacts/${id}`,{
      method: 'DELETE'
    }).then(res=>res.json()).then(() => { 
      handleDelete(id)
      reRender((render=>!render))
    }) 
    .catch(err => console.log(err))
  }

// Posts favorited data to separate section of db, protecting it from deletion or manipulation
// from inside this branch terminus.
  function saveContact(event) {
    fetch(`http://localhost:3000/favorites`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fave),
    }).then(
      reRender((render=>!render))
    )
  }

// Creates empty object format for posting new data.
  const [fave, setFave] = useState({
    id: '',
    name: contact.name,
    description: contact.description,
    number: contact.number
  })

// Displays individual object data, attached buttons with appropriate on-click function calls.
 return (
    <div>
      <article>
      
    
      
            <section className="column"style={{
             height: "100%", maxHeight: "0px", width: "100%", paddingBottom: "-20px", fontSize: "20px", marginRight: "400px"
            }}>
        {contact.name}
            </section>
            <section className="column is-full" style={{paddingBottom: "-20px"}}>
            <button onClick={((e) => showContact(e, contact))}>🔍</button>
            <button onClick={((e) => saveContact(e, contact))}>💾</button>
            <button style={{fontSize: "19px"}} onClick={deleteContact}>X</button>
            
            </section>
        
      </article> 
    </div>
  );
}

export default Contact;