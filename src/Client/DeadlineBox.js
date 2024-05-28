import React, { useEffect, useState } from 'react';
import DeadlineEdit from './DeadlineEdit';

export default function DeadlineBox(){

    const [deadline, setDeadline] = useState();
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

        return `${days} : ${currentHours} : ${currentMinutes} : ${currentSeconds}`;
    }

    const showEdit = () => {
        setEdit(true);
    }

    const hideEdit = () => {
        setEdit(false);
    }

    return(
        <div>


            {deadline > Date.now().valueOf() && (
                <p>
                    {formatTimer(deadline - Date.now().valueOf())}
                </p>
            )}
            
            <button onClick={showEdit}>
                Edit
            </button>
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

            {edit && (
                <div>
                    <DeadlineEdit 
                        updateDeadline = {updateDeadline}
                        setEdit = {setEdit}
                    />

                    <button onClick={hideEdit}>
                        Cancel
                    </button>
                </div>
                
            )}
            
        </div>
    )
}