import React from 'react';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'

const ClickableImage = (props) => {
    return(
        <Figure>
            <Figure.Image src={props.image} fluid />
            <Figure.Caption style={{textAlign:'center'}}>{props.name}</Figure.Caption>
        </Figure>
    )
}

export default ClickableImage;