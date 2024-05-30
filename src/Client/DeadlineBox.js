import React, { useEffect, useState } from 'react';
import DeadlineEdit from './DeadlineEdit';
import editIcon from "../Assets/editIcon.png";
import deleteIcon from "../Assets/deleteIcon.png";

export default function DeadlineBox(){

    const [title, editTitle] = useState("");
    const [deadline, setDeadline] = useState("empty");
    const [exist, doesExist] = useState(false);
    const [edit, setEdit] = useState(false);
    const [displayDelete, setDisplayDelete] = useState(false);

    const [stateReset, resetter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            resetter(prevState => prevState + 1)
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    const updateDeadline = (newDeadline) => {
        let temp = new Date(newDeadline).valueOf();

        console.log(temp.valueOf());
        // console.log(new Date(newDeadline));
        // console.log(typeof newDeadline);
        setDeadline(new Date(newDeadline).valueOf());
        doesExist(true);
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setDeadline(deadline - 1000);
    //     }, 1000)
    // }, [deadline]);

    // useEffect(() => {

    //     const updateState = () => {
    //         setDeadline(prevState => prevState)
    //     };

    //     const intervalId = setInterval(updateState(1000));

    //     return () => clearInterval(intervalId);
    // }, [])

    const formatTimer = (milliseconds) => {
        let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        let totalHours = parseInt(Math.floor(totalMinutes / 60));

        let days = parseInt(Math.floor(totalHours / 24));

        let currentSeconds = parseInt(totalSeconds % 60);
        let currentMinutes = parseInt(totalMinutes % 60);
        let currentHours = parseInt(totalHours % 60);

        if(currentSeconds < 10){
            var displaySeconds = "0" + currentSeconds;
        }
        else{
            var displaySeconds = currentSeconds;
        }

        if(currentMinutes < 10){
            var displayMinutes = "0" + currentMinutes;
        }
        else{
            var displayMinutes = currentMinutes;
        }

        if(currentHours < 10){
            var displayHours = "0" + currentHours;
        }
        else{
            var displayHours = currentHours;
        }
        
        if(days < 10){
            var displayDays = "0" + days;
        }
        else{
            var displayDays = days;
        }

        return `${displayDays} : ${displayHours} : ${displayMinutes} : ${displaySeconds}`;
    }

    const showEdit = () => {
        setEdit(true);
    }

    const hideEdit = () => {
        setEdit(false);
    }

    const showDelete = () => {
        setDisplayDelete(true);
    }

    const hideDelete = () => {
        setDisplayDelete(false);
    }

    const confirmDelete = () => {
        setDisplayDelete(false);
        doesExist(false);
    }


    return(
        <div className='deadline_container'>
            
            {(!exist && !edit) && (
                <button 
                    className='create_new_deadline_button'
                    onClick={showEdit}
                >
                    Create New <br />
                    Deadline
                </button>
            )}

            {(!edit && exist) && (
                <div>
                    {exist && (
                        <div className='edit_delete_icon_container'>
                            <button 
                                className='edit_icon'
                                onClick={showEdit}
                            >
                                <img
                                    src={editIcon}
                                    alt='Edit'
                                    height={32}
                                    width={32}
                                />
                            </button>

                            <button 
                                className='delete_icon'
                                onClick={showDelete}
                            >
                                <img 
                                    src={deleteIcon}
                                    alt='Delete'
                                    height={32}
                                    width={32}
                                />
                            </button>
                        </div>
                    )}

                    <p>
                        {title === "" && (
                            <p>
                                Untitled Deadline
                            </p>
                        )}
                        {title}
                    </p>

                    {deadline > Date.now().valueOf() && (
                        <p>
                            {formatTimer(deadline - Date.now().valueOf())}
                        </p>
                    )}

                    {deadline < Date.now().valueOf() && (
                        <p>
                            Your time has expired.
                        </p>
                    )}
                </div>
            )}

            {edit && (
                <div>
                    <DeadlineEdit 
                        updateDeadline = {updateDeadline}
                        setEdit = {setEdit}
                        editTitle = {editTitle}
                    />

                    <button onClick={hideEdit}>
                        Cancel
                    </button>
                </div>
                
            )}
                
            {displayDelete && (
                <div>
                    <p>
                        Are you sure you want to delete?
                    </p>

                    <button onClick={confirmDelete}>
                        Yes
                    </button>

                    <button
                        onClick={hideDelete}
                    >
                        No
                    </button>
                </div>
            )}

                
                
                


            <p>
                {/* {Date.now().toString()}
                |
                {deadline.toString()} */}

                {/* {Date.now().valueOf()}
                |
                {deadline}
                |
                {deadline - Date.now().valueOf()} */}
            </p>

            


            
        </div>
    )
}