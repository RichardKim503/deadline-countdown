import React, { useState } from 'react';
import ErrorModal from './ErrorModal';

export default function DeadlineBox(){

    const lemon = new Date();

    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [validDate, setValidDate] = useState(true);
    const [deadline, setDeadline] = useState(new Date());

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
        setHour(event.target.value);
    }

    const handleMinuteChange = (event) => {
        setMinute(event.target.value);
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

        if(hour < 0 || hour > 23){
            err += 'Enter a valid hour between 0 and 23.\n';
        }

        if(minute < 0 || minute > 59){
            err += 'Enter a valid minute between 0 and 59.\n';
        }

        if(err.length !== 0){
            setValidDate(false);
            setErrorMessage(err);
            console.log(errorMessage)
        }
        else{
            setValidDate(true);
            setDeadline(new Date(year, month - 1, day, hour, minute));
        }
        
    }

    return(
        <div>
            <div>
                <input
                    type='text'
                    value={month}
                    onChange={handleMonthChange}
                />
                
                /

                <input
                    type='text'
                    value={day}
                    onChange={handleDayChange}
                />

                /

                <input
                    type='text'
                    value={year}
                    onChange={handleYearChange}
                />
            </div>

            <div>
                <input
                    type='text'
                    value={hour}
                    onChange={handleHourChange}
                />
                :
                <input
                    type='text'
                    value={minute}
                    onChange={handleMinuteChange}
                />
            </div>
            


            {validDate && (
                <p>
                    {deadline.toString()}
                </p>
            )}

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