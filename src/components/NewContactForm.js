import React from "react";
import {useState} from 'react'
import {Link} from 'react-router-dom'

function NewContactForm({reRender, handleDelete, id}) {


  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    number: ""
  })




  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:event.target.value
    })
  }



  function handleSubmit(event) {
    event.preventDefault()
    fetch(`http://localhost:3000/contacts`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(
    setForm({
      id: "",
      name: "",
      description: "",
      number: ""
    }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={form.name} 
              type="text" name="name" placeholder="Name" />
          <input onChange={handleChange} value={form.description} 
              type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} value={form.number} 
              type="tel" maxlength="10" name="number" placeholder="Number" />

        </div>
        <button type="submit">
          Add Contact
        </button>
      </form>

    
    <nav>
  <button>
  <Link to='/'>Home</Link>
</button>
</nav>
    </div>
  );
}

export default NewContactForm;
