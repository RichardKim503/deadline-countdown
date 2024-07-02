import React, { useState } from 'react';

function NavBar({toggleModal}) {

    return ( 
        <div id='navbar'>
            You are not signed in

            <button
                onClick={toggleModal}
            >
                temp
            </button>
        </div>
     );
}

export default NavBar;