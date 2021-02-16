import React from 'react';
import Image from 'react-bootstrap/Image';

const ClickableImage = (props) => {
    return(
        <div>
            <Image src={props.image} fluid />
            <h3 style={{alignItems:'center'}}>{props.name}</h3>
        </div>
    )
}

export default ClickableImage;