import React, {useEffect, useState, useRef} from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import {useTransition, animated} from 'react-spring';

const Node = (props) => {
    const styleSheet = {
        position: 'absolute', 
        padding: '2px',
        background: "linear-gradient(#58C2ED, #1B85DC)",
        width: '10rem', height: '3.5rem',
        border: '2px solid',
        bottom: `${props.level*3.5}rem`,
        left: `${10*props.frameNum}rem`
    }
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'serif'
    }
    return (
        <div style={styleSheet}>
            <p style={textStyle}>{props.text.split('\n')[0]}<br/>{props.text.split('\n')[1]}</p>
        </div>
    );
}

const Recursion = () => {
    var [frames, setFrames] = useState([])
    
    const [isRunning, setIsRunning] = useState(false) // 'Visualize' is pressed or not
    const [delay, setDelay] = useState(50) // initial speed is 50 (middle of slider)


    

    function handleVis(event) {
        event.preventDefault()
        setIsRunning(true)
    }

    function handleReset() {
        window.location.reload()
    }

    function handlePause(event) {
        event.preventDefault()
        // if not paused, pause it, else reset it to the value on the slider
        delay !== null ? setDelay(null) : setDelay(document.getElementById("speed-range").value)
    }



    const showFrames = () => {
        return (
            transition.map(({item, props, key}) => 
            <animated.div key={key} style={props}>
                {item}
            </animated.div>)
        )
    }

    return(
        <Container fluid style={{paddingTop:30, paddingLeft: 30}}>
            <Row style={{justifyContent:'center'}}>
                {/* Slider */}
                <div className="my-3" style={{paddingLeft: 10}}>
                    <label htmlFor="speed-range" style={{margin: '0 auto'}}>Speed</label>
                    <input type="range" className="custom-range" id="speed-range" onChange={event => setDelay(event.target.value)} style={{transform: 'rotate(180deg)'}} />
                </div>
                <Form inline onSubmit={handlePause} style={{paddingLeft: 10}}>
                    <Button type="submit" className="my-1" id="pause">||</Button>
                </Form>
                <Form inline onSubmit={handleVis} style={{paddingLeft: 20}}>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        name="method">
                        <option value="0">Fibbonacci, n=4</option>
                    </Form.Control>
                    <Button id="visualize" type="submit" className="my-1">Visualize</Button>
                </Form>
                <Form inline onSubmit={handleReset} style={{paddingLeft: 10}}>
                    <Button type="submit" className="my-1">Reset</Button>
                </Form>
            </Row>
            <Row style={{position: 'relative', marginBottom: '2rem', border: '', width: '100%', height: '28rem'}}>
                <div id="framebox">
                    {showFrames()}
                </div>
            </Row>
        </Container>
    );
}

export default Recursion