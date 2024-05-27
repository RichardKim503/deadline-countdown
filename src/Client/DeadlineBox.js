import React, { useState } from 'react';
import DeadlineEdit from './DeadlineEdit';

export default function DeadlineBox(){

    const [deadline, setDeadline] = useState();

    const updateDeadline = (newDeadline) => {
        setDeadline(newDeadline);
    }

    return(
        <div>

            <p>
                asdf
                {deadline}
            </p>
            <DeadlineEdit 
                updateDeadline = {updateDeadline}
            />
        </div>
    )
}