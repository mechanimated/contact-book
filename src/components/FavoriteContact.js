import React from "react";

function FavoriteContact({ showContact, faveContact, handleFaveDelete, id, reRender }) {



  function deleteFaveContact() {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'DELETE'
    }).then(res => res.json()).then(() => {
      handleFaveDelete(id)
      reRender((render => !render))
    })
      .catch(err => console.log(err))
  }

  return (
    <tr>
      <td>
        {faveContact.name}
      </td>
      <td>
      <button style={{ background: 'transparent', border: 'none' }} onClick={((e) => showContact(e, faveContact))}>🔍</button>
      </td>
      <td>
        <button style={{ background: 'transparent', border: 'none' }} onClick={deleteFaveContact}>X</button>
      </td>
    </tr>
  );
}


export default FavoriteContact;