import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AccountModal() {

    const [page, setPage] = useState("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginUsernameError, setLoginUsernameError] = useState("");
    const [loginPasswordError, setLoginPasswordError] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [refreshPage, setRefreshPage] = useState(false);

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

    const handleUsernameEvent = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordEvent = (event) => {
        setPassword(event.target.value);
    }

    

    const loginAccount = () => {

        let loginAccountObject = {
            username: username,
            password: password
        }

        axios.post('http://localhost:8000/login', loginAccountObject)
        .then(res => {

            let validLoginUsername = true;
            let validLoginPassword = true;

            setLoginUsernameError('');
            setLoginPasswordError('');

            if(res.data === 'Account does not exist'){
                setLoginUsernameError('This username is not registered');
                validLoginUsername = false;
            }

            if(res.data === 'Wrong password'){
                setLoginPasswordError('Password is incorrect');
                validLoginPassword = false;
            }

            if(validLoginUsername && validLoginPassword){
                setPage("loginsuccessful");

                setRefreshPage(true);
            }
        });
    }

    const createAccount = () => {

        let validUsername = false;
        let validPassword = false;

        if(username.length < 8){
            setUsernameError("Your username is too short");
        }
        else if(username.length > 32){
            setUsernameError("Your username is too long");
        }
        else{
            validUsername = true;
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
                validPassword = true;
                setPasswordError("");
            }
        }

        if(validUsername && validPassword){

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

                    setUsername("");
                    setPassword("");
                }
            });

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
                        <p className='account_error'>
                            {loginUsernameError}
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
                            {loginPasswordError}
                        </p>
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

            {page === "loginsuccessful" && (
                <div>
                    <p>
                        Successfully logged in
                    </p>
                    <p>
                        Refreshing page in just a moment
                    </p>
                </div>
            )}
            
            
        </div>
    );
}

export default AccountModal;