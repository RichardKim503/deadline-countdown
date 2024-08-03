import axios from 'axios';
import React, { useState } from 'react';

function AccountModal() {

    const [page, setPage] = useState("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleUsernameEvent = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordEvent = (event) => {
        setPassword(event.target.value);
    }

    

    const loginAccount = () => {

    }

    const createAccount = () => {

        if(username.length < 8){
            setUsernameError("Your username is too short");
        }
        else if(username.length > 32){
            setUsernameError("Your username is too long");
        }
        else{
            setUsernameError("");
        }

        const alphabetRegex = /[a-zA-Z]/;
        const numberRegex = /\d/;

        if(password.length < 8){
            setPasswordError("Your password is too short");
        }
        else{
            if(!alphabetRegex.test(password)){
                setPasswordError("Your password must have at least one alphabetical letter");
            }
            else if(!numberRegex.test(password)){
                setPasswordError("Your password must have at least one number");
            }
            else{
                setPasswordError("");
            }
        }

        let createAccountObject = {
            username: username,
            password: password
        }

        axios.post("http://localhost:8000/createaccount", createAccountObject)
        .then(res => {
            if(res.data === "Username already taken"){
                setUsernameError("Your username is already taken")
            }
            else if(res.data === "Username is available"){
                setPage("accountcreated");
            }
        });
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
                            Log In
                        </button>
                        <p 
                            onClick={() => setPage("signin")}
                            className='account_hyperlink'
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
                        <p className='account_error'>
                            {usernameError}
                        </p>
                        <p className='account_caption'>
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
                        <p className='account_error'>
                            {passwordError}
                        </p>
                        <p className='account_caption'>
                            Must contain 8+ characters, at least 1 letter and 1 number.
                        </p>
                    </div>

                    <div>
                        <button
                            onClick={createAccount}
                        >
                            Sign Up
                        </button>

                        <p
                            onClick={() => setPage("login")}
                            className='account_hyperlink'
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