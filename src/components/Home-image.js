import React from 'react';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'
import { Link, Redirect } from 'react-router-dom';

const ClickableImage = (props) => {
    return (
        <Link to={props.page}>
            <Figure className="custom-figure">
                <Figure.Image src={props.image} fluid />
                <Figure.Caption style={{ textAlign: 'center' }}>{props.name}</Figure.Caption>
            </Figure>
        </Link>
    )
}

export default ClickableImage;