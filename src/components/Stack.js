import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import StackForm from './Forms/Stack-Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stack = () => {
    return (
        <animated.div>
            <StackForm />

        </animated.div>
    );
}

export default Stack