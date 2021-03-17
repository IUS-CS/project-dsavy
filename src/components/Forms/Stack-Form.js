import React, {useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const StackNode = (props) => {
    return (
        <div style={{position: 'absolute', background: "linear-gradient(#58C2ED, #1B85DC)", width: '18rem', height: '3rem', border: 'solid', bottom: `${props.id*3}rem`, right: '-2.5px', borderBottom: '0'}}>
            <h4 style={{textAlign: 'center', color: 'white', fontWeight: '550'}}>{props.value}</h4>
        </div>
    );
}

const ListForm = () => {
    const [stack, setStack] = useState([]);
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);

    function onPush(event) {
        event.preventDefault();
        setCount(count + 1);
        setStack(stack.concat([<Row key={count}><StackNode id={count} value={value} /></Row>]));
    }

    function handleChange(event) {
        setValue(event.target.value);
    }
  
    function onPop(event) {
        event.preventDefault();
        setCount(count - 1);
        setStack(stack.slice(0, stack.length-1));
    }
    
    return (
        <Container fluid style={{paddingTop:60, paddingLeft: 30}}>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Insert
            </Row>

            <Row style={{justifyContent:'left'}}>
            <Form>
                <Form.Control className="my-1 mr-2" type="text" name="value" placeholder="Value" onChange={handleChange} value={value}/>
                <Button onClick={onPush} type="submit" className="my-1">Push</Button>
            </Form>
            </Row>

            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Remove
            </Row>

            <Row style={{justifyContent:'left'}}>
                <Form inline onSubmit={onPop}>
                    <Button type="submit" className="my-1" style={{}}>Pop</Button>
                    <Form.Label className="my-1 mr-2">
                        The Element on Top
                    </Form.Label>
                </Form>
            </Row>
            
            {/* this div holds the stack nodes */}
            <div id="stackbox" style={{width: '18rem', height: '28rem', position: 'relative', right: '9rem', bottom: '12rem', left: '42rem', marginBottom: '2rem', border: 'solid', borderTop: 0}}>
                {stack}
            </div>
        </Container>
    )
}

export default ListForm;