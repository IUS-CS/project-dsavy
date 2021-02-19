import React from 'react';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'
import { Link, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const ClickableImage = (props) => {
    return (
        <Link to={props.page} style={{color:'black', textDecoration:'none'}}>
            <Card className="custom-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ClickableImage;