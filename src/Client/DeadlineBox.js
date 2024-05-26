import React, { useState } from 'react';

function DeadlineBox(){

    const lemon = new Date();

    const [month, setMonth] = useState();
    const [deadline, setDeadline] = useState();

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    }

    const applyChanges = () => {
        console.log("asdf")
        setDeadline(month);
    }

    return(
        <div>
            <input
                type='text'
                value={month}
                onChange={handleMonthChange}
            />

            <p>
                {deadline}
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