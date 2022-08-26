import React from "react";
import {Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <div style={{ 
        backgroundImage: 'url(https://i.postimg.cc/rFXzzb64/2022-08-26-0mn-Kleki.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
    }}>
      <div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="box" style={{marginLeft: "646px", marginRight:"790px", width:"18%",  marginTop: "10px", alignItems:'center'}}>
        <h2>All The People You Never Call Cuz You're A Bad Friend</h2>
      </div>
      

     
      <nav className="box" style={{marginLeft: "646px", marginRight:"0px", width:"18%",  marginTop: "-22px", alignItems:'center', }}>
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
    </div>
  );
}

export default App;
