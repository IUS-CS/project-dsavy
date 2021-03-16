import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Check = (props) => {
    if (props.input === false) {
        return(
            <Alert variant='danger'>
                Element length cannot exceed 6 characters
            </Alert>
        )
    }
    else {
        return null;
    }

}

export default Check;