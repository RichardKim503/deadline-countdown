import React, { useState } from 'react';
import ErrorModal from './ErrorModal';

export default function DeadlineEdit({updateDeadline, setEdit, editTitle}){

    const [title, setTitle] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [meridiem, setMerideim] = useState('AM');
    const [errorMessage, setErrorMessage] = useState('');
    const [validDate, setValidDate] = useState(true);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    }

    const handleDayChange = (event) => {
        setDay(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleHourChange = (event) => {
        

        // addLeadingZero(event.target.value)
        // let value = event.target.value;

        // if (value.length === 1 && value !== '0') {
        //     value = '0' + value;
        //     console.log("here1")
            
        // }

        // if (value.length === 2 && value.startsWith('0')) {
        //     value = value.slice(1);
        //     console.log("here2")
        // }

        setHour(event.target.value);
    }

    const handleMinuteChange = (event) => {
        setMinute(event.target.value);
    }

    const addLeadingZero = (value) => {

        console.log("updated")
        console.log(value)

        if(value.length === 1 && value !== '0'){
            value = '0' + value;
            console.log("here1")
        }

        // else if(value.length === 2 && value.startsWith('0')){
        //     value = value.slice(1)
        //     console.log("here2")
        // }
        console.log(value)
    }

    const selectAM = () => {
        setMerideim('AM');
    }

    const selectPM = () => {
        setMerideim('PM');
    }


    const applyChanges = () => {

        var err = '';

        if(month < 1 || month > 12){
            err += 'Enter a valid month between 1 and 12.\n';
        }

        if( 
            month == 1 || 
            month == 3 || 
            month == 5 || 
            month == 7 || 
            month == 8 || 
            month == 10 || 
            month == 12){

            if(day < 1 || day > 31){
                err += 'Enter a valid day between 1 and 31.\n';
            }

        }
        else if(
            month == 4 || 
            month == 6 || 
            month == 9 || 
            month == 11){

            if(day < 1 || day > 30){
                err += 'Enter a valid day between 1 and 30.\n';
            }

        }
        else if(month == 2){
            
            if(year % 4 === 0){
                if(day < 1 || day > 29){
                    err += 'Enter a valid day between 1 and 29.\n';
                }
            }
            else{
                if(day < 1 || day > 28){
                    err += 'Enter a valid day between 1 and 28.\n';
                }
            }
        }
        else{
            err += 'Enter a valid day.\n';
        }

        if(hour < 0 || hour > 12){
            err += 'Enter a valid hour between 0 and 12.\n';
        }

        if(minute < 0 || minute > 59){
            err += 'Enter a valid minute between 0 and 59.\n';
        }

        // console.log();
        console.log(Date.now())
        console.log(new Date(year, month - 1, day, hour, minute).valueOf())
        // console.log(Date.now() < new Date(year, month - 1, day, hour, minute).toString())

        if(Date.now() > new Date(year, month - 1, day, hour, minute).valueOf()){
            err += 'This date and time has already passed.\n';
        }

        if(err.length !== 0){
            setValidDate(false);
            setErrorMessage(err);
            console.log(errorMessage)
        }
        else{
            setValidDate(true);
            // setDeadline(new Date(year, month - 1, day, hour, minute));

            if(meridiem === 'AM'){
                console.log(hour)
                updateDeadline(new Date(year, month - 1, day, hour, minute).toString());
            }
            else if(meridiem === 'PM'){
                // hour += 12;
                console.log(12 + hour)
                console.log(Number(hour+12));
                console.log(meridiem)
                updateDeadline(new Date(year, month - 1, day, Number(hour) + 12, minute).toString());
            }
            
            setEdit(false);
            editTitle(title);
        }
        
    }

    return(
        <div>
            <div>
                <input
                    className='input_form_large'
                    type='text'
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <input
                    className='input_form_small'
                    maxLength={2}
                    type='text'
                    value={month}
                    onChange={handleMonthChange}
                />
                
                <p className='date_slash_text'>
                    &nbsp;/&nbsp;
                </p>
                
                <input
                    className='input_form_small'
                    type='text'
                    maxLength={2}
                    value={day}
                    onChange={handleDayChange}
                />

                <p className='date_slash_text'>
                    &nbsp;/&nbsp;
                </p>

                <input
                    className='input_form_medium'
                    type='text'
                    maxLength={4}
                    value={year}
                    onChange={handleYearChange}
                />
            </div>

            <div>
                <input
                    className='input_form_small'
                    type='text'
                    maxLength={2}
                    value={hour}
                    onChange={handleHourChange}
                />
                
                <p className='date_slash_text'>
                    &nbsp;:&nbsp;
                </p>

                <input
                    className='input_form_small'
                    type='text'
                    maxLength={2}
                    value={minute}
                    onChange={handleMinuteChange}
                />

                {meridiem === 'AM' && (
                    <div>
                        <button
                            className='meridiem_selected'
                            onClick={selectAM}
                        >
                            AM
                        </button>

                        <button
                            className='meridiem_not_selected'
                            onClick={selectPM}
                        >
                            PM
                        </button>
                    </div>
                )}

                {meridiem === 'PM' && (
                    <div>
                        <button 
                            className='meridiem_not_selected'
                            onClick={selectAM}
                        >
                            AM
                        </button>

                        <button
                            className='meridiem_selected'
                            onClick={selectPM}
                        >
                            PM
                        </button>
                    </div>
                )}
                
            </div>
            


            {/* {validDate && (
                <p>
                    {deadline.toString()}
                </p>
            )} */}

            {!validDate && (
                <ErrorModal 
                    message = {errorMessage}
                />
            )}

            <button
                onClick={applyChanges}
            >
                Apply
            </button>
        </div>
    )
}