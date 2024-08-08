import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './modal.css';
import DeadlineBox from './Client/DeadlineBox';
import MainTable from './Client/MainTable';
import Header from './Client/Header';
import AccountModal from './Client/AccountModal';
import axios from 'axios';


axios.defaults.withCredentials = true;

function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div>
      <Header />
      <MainTable 
        toggleModal={toggleModal}
      />

      {modal && (
        <div className="modal">
          <div 
            className="overlay" 
            onClick={toggleModal}
          />
          <div className="modal-content">
            <AccountModal />
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
