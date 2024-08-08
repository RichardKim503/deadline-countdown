import React, { useState } from 'react';
import axios from 'axios';

function NavBar({toggleModal}) {
    
    const logout = () => {
        axios.post('http://localhost:8000/logout');
    }


    return ( 
        <div id='navbar'>
            You are not signed in

            <button
                onClick={toggleModal}
            >
                Login
            </button>

            <button onClick={logout}>
                Logout
            </button>
        </div>
     );
}

export default NavBar;