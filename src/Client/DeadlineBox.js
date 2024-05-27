import React, { useState } from 'react';
import DeadlineEdit from './DeadlineEdit';

export default function DeadlineBox(){

    const [deadline, setDeadline] = useState();
    const [edit, setEdit] = useState(false);

    const updateDeadline = (newDeadline) => {
        setDeadline(newDeadline);
    }

    const fuck = () => {
        setEdit(true);
    }

    return(
        <div>
            <button onClick={fuck}>
                Edit
            </button>
            <p>
                asdf
                {deadline}
            </p>

            {edit && (
                <DeadlineEdit 
                    updateDeadline = {updateDeadline}
                />
            )}
            
        </div>
    )
}