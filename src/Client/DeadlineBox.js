import React, { useState } from 'react';
import DeadlineEdit from './DeadlineEdit';

export default function DeadlineBox(){

    const [deadline, setDeadline] = useState();
    const [edit, setEdit] = useState(false);

    const updateDeadline = (newDeadline) => {
        setDeadline(newDeadline);
    }

    const showEdit = () => {
        setEdit(true);
    }

    const hideEdit = () => {
        setEdit(false);
    }

    return(
        <div>
            <button onClick={showEdit}>
                Edit
            </button>
            <p>
                asdf
                {deadline}
            </p>

            {edit && (
                <div>
                    <DeadlineEdit 
                        updateDeadline = {updateDeadline}
                    />

                    <button onClick={hideEdit}>
                        Cancel
                    </button>
                </div>
                
            )}
            
        </div>
    )
}