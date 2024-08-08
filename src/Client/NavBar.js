import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NavBar({toggleModal}) {

    const [username, setUsername] = useState('');
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
        });
      }, []);

      useEffect(() => {
        if(doesSessionExist){
            axios.post('http://localhost:8000/getusername')
            .then(res => {
                setUsername(res.data)
            })
        }
      });

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
                <div>
                    <p>
                        Logged in as {username}
                    </p>
                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
            :
                <div>
                    <p>
                        You are not logged in
                    </p>
                    <button onClick={toggleModal}>
                        Login
                    </button>
                </div>
            }
            
        </div>
     );
}

export default NavBar;