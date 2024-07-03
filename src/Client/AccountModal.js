import React, { useState } from 'react';

function AccountModal() {

    const [page, setPage] = useState("accountcreated");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameEvent = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordEvent = (event) => {
        setPassword(event.target.value);
    }

    

    const loginAccount = () => {

    }

    const createAccount = () => {

        if(password.length < 8){
            console.log('too short')
        }

        const alphabetRegex = /[a-zA-Z]/;
        const numberRegex = /\d/;

        if(!alphabetRegex.test(password)){
            console.log('must have at least one letter')
        }

        if(!numberRegex.test(password)){
            console.log('must have at least one number')
        }

        
    }


    return ( 
        <div>
            {page === "login" && (
                <div className='log_in_page'>
                    <div>
                        <p>
                            Username
                        </p>
                        <input
                            className='account_input_form'
                            value={username}
                            onChange={handleUsernameEvent}
                        />
                    </div>

                    <div>
                        <p>
                            Password
                        </p>
                        <input
                            className='account_input_form'
                            value={password}
                            onChange={handlePasswordEvent}
                        />
                    </div>

                    <div>
                        <button
                            onClick={loginAccount}
                        >
                            login
                        </button>
                        <p 
                            onClick={() => setPage("signin")}
                        >
                            Don't have an account? Create one
                        </p>
                    </div>
                </div>
            )}
            
            {page === "signin" && (
                <div className='sign_up_page'>
                    <div>
                        <p>
                            Username
                        </p>
                        <input
                            className='account_input_form'
                            value={username}
                            onChange={handleUsernameEvent}
                        />
                        <p>
                            Must be between 8 and 32 characters.
                        </p>
                    </div>

                    <div>
                        <p>
                            Password
                        </p>
                        <input
                            className='account_input_form'
                            value={password}
                            onChange={handlePasswordEvent}
                        />
                        <p>
                            Must contain 8+ characters, at least 1 letter and 1 number.
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={createAccount}
                        >
                            here
                        </button>

                        <p
                            onClick={() => setPage("login")}
                        >  
                            Already have an account? Log in
                        </p>
                    </div>
                </div>
            )}

            {page === "accountcreated" && (
                <div>
                    <p>
                        Account Successfully Created
                    </p>
                    <p
                        onClick={() => setPage("login")}
                    >
                        Go to login page
                    </p>
                    
                </div>
            )}
            
            
        </div>
    );
}

export default AccountModal;