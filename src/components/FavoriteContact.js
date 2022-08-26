import React from "react";

// End of branch, displays single objects data in list of favorites.
function FavoriteContact({ showContact, faveContact, handleFaveDelete, id, reRender }) {

// Permanently deletes data by id of clicked element.
  function deleteFaveContact() {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: 'DELETE'
    }).then(res => res.json()).then(() => {
      handleFaveDelete(id)
      reRender((render => !render))
    })
      .catch(err => console.log(err))
  }

// Displays individual object data, attached buttons with appropriate on-click function calls.
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