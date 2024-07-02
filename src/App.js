import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './modal.css';
import DeadlineBox from './Client/DeadlineBox';
import MainTable from './Client/MainTable';
import Header from './Client/Header';
import axios from 'axios';


axios.defaults.withCredentials = true;

function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("here2")
    setModal(!modal);
}

  return (
    <div>
      <Header />
      <MainTable 
        toggleModal={toggleModal}
      />
      {/* <DeadlineBox /> */}
      {modal && (
        <div className="modal">
          <div 
            className="overlay" 
            onClick={toggleModal}
          />
          <div className="modal-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia eum repellendus quaerat, saepe quae commodi sed nam cum odit odio earum, quisquam quam molestiae optio explicabo ipsa! Nisi sed esse reprehenderit eius quos, error ipsam, corporis quasi optio voluptatem ratione. Doloremque esse odio rerum aperiam illo sunt quo aliquid.
          </div>
          <button 
            className="close-modal"
            onClick={toggleModal}  
          >
            CLOSE
          </button>
        </div>
      )}
      

    </div>
  );
}

export default App;

// todo
/*
DONEi should add pm and am
DONEmax number and checking
DONEif the time is before today, add error
DONEnumeric values only
DONEbug with midnight and noon

button to show original starting dates
add original starting date
when editing, add original starting date to input form
error modal

css:
-match the diagram
  -create new
  -deadline counter
  -edit deadline
0 for single digits

create new button
delete button
unamed deadline
create 4x3 deadlines
title checking for 100 or less

server side and use session
navbar should have login in out feature

database schema:
exist?
title
time in milliseconds
*/
