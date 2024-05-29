import React, { useEffect, useState } from 'react';
import DeadlineEdit from './DeadlineEdit';
import { type } from '@testing-library/user-event/dist/type';

export default function DeadlineBox(){

    const [title, editTitle] = useState();
    const [deadline, setDeadline] = useState("empty");
    const [exist, doesExist] = useState(false);
    const [edit, setEdit] = useState(false);

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

    return(
        <div>

            {!exist && (
                <button onClick={showEdit}>
                    Create New Deadline
                </button>
            )}

            {!edit && (
                <div>
                    <p>
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

                    {exist && (
                        <button onClick={showEdit}>
                            Edit
                        </button>
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