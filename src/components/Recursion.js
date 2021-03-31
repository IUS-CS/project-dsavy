import React, {useState} from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const Node = (props) => {
    return (
        <div style={{position: 'absolute', background: "linear-gradient(#58C2ED, #1B85DC)", width: '18rem', height: '3rem', border: 'solid', bottom: `${props.id*3}rem`, right: '-2.5px', borderBottom: '0'}}>
            <h4 style={{textAlign: 'center', color: 'white', fontWeight: '550'}}>{props.text}</h4>
        </div>
    );
}

const Recursion = () => {
    const [frames, setFrames] = useState([[]]) 
    function handleVis(event) {
        event.preventDefault()
    }


    return(
        <div>
            <Container fluid style={{paddingTop:60, paddingLeft: 30}}>

            <Row style={{justifyContent:'center'}}>
                <Form inline onSubmit={handleVis} style={{paddingLeft: 20}}>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        name="method">
                        <option value="0">Fibbonacci</option>
                    </Form.Control>
                    <Button type="submit" className="my-1" style={{}}>Visualize</Button>
                </Form>
                <Form inline onSubmit={handleVis} style={{paddingLeft: 10}}>
                    <Button type="submit" className="my-1" style={{}}>Reset</Button>
                </Form>
            </Row>
            
            {/* this div holds the stack nodes */}
            {/* <div id="stackbox" style={{width: '18rem', height: '28rem', position: 'relative', right: '9rem', bottom: '12rem', left: '42rem', marginBottom: '2rem', border: 'solid', borderTop: 0}}>
                {stack}
            </div> */}
        </Container>
        </div>
    );
}

export default Recursion