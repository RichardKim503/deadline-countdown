import React, { useState } from 'react';

export default function ErrorModal(props) {

    const error = props.message;

    const [modal, setModal] = useState(false);

    return(
        <div>
            <p>
                {error}
            </p>
        </div>
    )
}