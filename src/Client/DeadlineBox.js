import React, { useEffect, useState } from 'react';
import DeadlineEdit from './DeadlineEdit';
import editIcon from "../Assets/editIcon.png";
import deleteIcon from "../Assets/deleteIcon.png";
import switchIcon from "../Assets/switchIcon.png";

export default function DeadlineBox(){

    const [title, editTitle] = useState("");
    const [deadline, setDeadline] = useState("empty");
    const [exist, doesExist] = useState(false);
    const [edit, setEdit] = useState(false);
    const [displayDelete, setDisplayDelete] = useState(false);

    const [showEnd, setShowEnd] = useState(true);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [formatMerideim, setFormatMerideim] = useState('');

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
        let currentHours = parseInt(totalHours % 24);

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

    const setStartEnd = () => {
        setShowEnd(!showEnd)
    }

    const formatDate = (date) => {

        let result = '';

        let day = date.substring(0, date.indexOf(" "));

        switch(day){
            case 'Mon':
                result += "Monday, "
                break;
            case 'Tue':
                result += "Tuesday, "
                break;
            case 'Wed':
                result += "Wednesday, "
                break;
            case 'Thu':
                result += "Thursday, "
                break;
            case 'Fri':
                result += "Friday, "
                break;
            case 'Sat':
                result += "Saturday, "
                break;
            case 'Sun':
                result += "Sunday, "
                break;
            default:
                result += "Logsday, "
                break;
        }

        // Adds a comma between the day and year
        date = date.substring(0, 10) + ', ' + date.substring(11);

        // Adds 'at' between the year and the time
        date = date.substring(0, 16) + ' at ' + date.substring(17);

        // Removes timezone information at the end
        date = date.substring(0, 28);

        let hour = parseInt(date.substring(20, 22), 10);
        
        // If it is AM, just add 'AM' at the end
        // If it is PM, take the hour, subtract 12, then add 'PM'
        if(formatMerideim === 'AM'){

            if(hour === 0){
                date = date.substring(0, 20) + '12' + date.substring(22);
            }
            date += ' AM';
        }
        else if(formatMerideim === 'PM'){
            
            if(hour !== 12){
                hour -= 12;
            }

            if(hour < 10){
                date = date.substring(0, 20) + '0' + hour + date.substring(22);
            }
            else{
                date = date.substring(0, 20) + hour + date.substring(22);
            }
            
            date += ' PM';
        }

        // Removes generated day format
        date = date.slice(4);

        result += date;

        return result;

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
                                className='button_icon'
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
                                className='button_icon'
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
                            <p className='main_title'>
                                Untitled Deadline
                            </p>
                        )}
                        <p className='main_title'>
                            {title}
                        </p>
                        
                    </p>

                    {deadline > Date.now().valueOf() && (
                        <p className='main_timer'>
                            {formatTimer(deadline - Date.now().valueOf())}
                        </p>
                    )}

                    {deadline < Date.now().valueOf() && (
                        <p className='main_timer'>
                            Your time has expired
                        </p>
                    )}

                    {!displayDelete && (
                        <div>
                            {showEnd ?
                                <p>
                                    Ending {formatDate(endDate)}
                                </p>
                            :
                                <p>
                                    Started {formatDate(startDate)}
                                </p>
                            }
    
                            <button
                                className='button_icon'
                                onClick={setStartEnd}
                            >
                                <img 
                                    src={switchIcon}
                                    alt='Switch'
                                    height={32}
                                    width={32}
                                />
                            </button>
                        </div>
                        
                    )}
                </div>
            )}

            {edit && (
                <div>
                    <DeadlineEdit 
                        updateDeadline = {updateDeadline}
                        setEdit = {setEdit}
                        editTitle = {editTitle}
                        setStartDate = {setStartDate}
                        setEndDate = {setEndDate}
                        setFormatMerideim = {setFormatMerideim}
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