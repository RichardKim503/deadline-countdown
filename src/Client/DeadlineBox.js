import React, { useState } from 'react';

function DeadlineBox(){

    const lemon = new Date();

    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
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

        setDeadline(new Date(year, month - 1, day, hour, minute));
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
            


            <p>
                {deadline.toString()}
            </p>

            <button
                onClick={applyChanges}
            >
                Apply
            </button>
        </div>
    )
}

export default DeadlineBox;