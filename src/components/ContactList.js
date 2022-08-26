import React from "react";
import Contact from "./Contact";
import {useState} from "react"
import "../index.css";


function ContactList({contacts, handleDelete, saveContact, reRender}) {
  const [details, setDetails] = useState([])
  function showContact(event, contact) {
   setDetails(contact)
  
  }
  console.log(details)
  return (
    <div>

      
      <article className="box" style={{
            marginLeft: "860px", marginRight:"790px", width:"18%",  
            marginTop: "-40px", alignItems:'center', maxHeight: ""
            }}>
        <section style={{ overflowY: "auto", 
            flexDirection: "column", height: "100%", maxHeight: "400px" }}>
        <ul>
        <li><h3>{details.name}</h3></li>
        <li><h5>{`Notes: `}</h5>{details.description}</li>
        <li><h5>{`Phone Number: `}</h5>{details.number}</li>
        </ul>
        </section>
        </article>

        
        
    <table className="box" style={{marginLeft: "860px", marginRight:"790px", width:"18%", overflowY:"auto",
     marginTop: "-40px", alignItems:'center', maxHeight:"300px"}}>
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
          <Contact reRender={reRender} contact={contact}  id={contact.id} key={buttcheeks} 
                   saveContact={saveContact} handleDelete={handleDelete} showContact={showContact} />
        )})}
      </tbody>
    </table>
    </div>
  );
}

export default ContactList;
