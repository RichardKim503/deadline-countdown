import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NavBar({toggleModal}) {

    const [doesSessionExist, setDoesSessionExist] = useState(false);
    const [refreshPage, setRefreshPage] = useState(false);

    useEffect(() => {
        axios.post('http://localhost:8000/sessionexists')
        
        .then(res => {
            if(res.data === 'Session True'){
                setDoesSessionExist(true);
            }
            else if(res.data === 'Session False'){
                setDoesSessionExist(false);
            }
        })
      }, []);

    useEffect(() => {
        let timer;
        if(refreshPage) {
            timer = setTimeout(() => {
                setRefreshPage(false);
                window.location.reload();
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [refreshPage]);
    
    const logout = () => {
        axios.post('http://localhost:8000/logout')
        .then(res => {
            if(res.data === 'Log out successful'){
                setRefreshPage(true);
            }
        });
    }

    return ( 
        <div id='navbar'>
            
            {doesSessionExist ? 
                <button onClick={logout}>
                    Logout
                </button>
            :
                <div>
                    <button onClick={toggleModal}>
                        Login
                    </button>
                </div>
            }
            
        </div>
     );
}

export default NavBar;