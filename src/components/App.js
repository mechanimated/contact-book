import React from "react";
import {Link, Outlet} from 'react-router-dom';

// Link storage and permanent nav bar for clicking through pages.
function App() {
  return (
    <div>
      <div>
        <h2>All The People You Never Call Cuz You're A Bad Friend</h2>
      </div>

      <nav>
        <ul>
          <button>
            <Link to='/Home'>Home</Link>
          </button>
          <button>
            <Link to='/ContactList'>Contact Book</Link>
          </button>
          <button>
            <Link to='/NewContactForm'>New Contact Form</Link>
          </button>
          <button>
            <Link to='/FavoriteContactList'>Favorite Contact</Link>
          </button>
        </ul>
      </nav>
      <Outlet />
      
    </div>
  );
}

export default App;
