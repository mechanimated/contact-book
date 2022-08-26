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