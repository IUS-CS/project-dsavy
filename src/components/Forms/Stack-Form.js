import React, {useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import {useTransition, animated} from 'react-spring';

const StackNode = (props) => {
    const styleSheet = {
        position: 'absolute',
        background: "linear-gradient(#58C2ED, #1B85DC)",
        width: '18rem',
        height: '3rem',
        border: 'solid',
        bottom: `${props.id*3}rem`,
        right: '-2.5px',
        borderTop: '0'
    }
    return (
        <div id={`${props.id}`} style={styleSheet}>
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
        setStack(push(stack, value));
    }

    function push(array, value) {
        if (value == '') {
            alert('Enter number');
            return array;
        }
      
        if (array.length > 9) {
            alert('Stack is at max length');
            return array;
        }
      
        if (Math.abs(value) > 999) {
            alert('Number must be 3 digits or less');
            return array;
        }
          
        setCount(count + 1);
        return array.concat([<StackNode id={count} value={value} key={count}/>]);
    }
    
    function handleChange(event) {
        setValue(event.target.value);
    }
    
    function onPop(event) {
        event.preventDefault();
        if (stack.length !== 0) {
            setCount(count - 1);
            setStack(pop(stack));
        }
    }

    function onPeek(event) {
        event.preventDefault();
        // change the color
        document.getElementById(`${stack.length-1}`).style.background = "linear-gradient(#ff9d00, #ffb61785)";
        setTimeout(() => {
            // reset the color after a second
            document.getElementById(`${stack.length-1}`).style.background = "linear-gradient(#58C2ED, #1B85DC)";
        }, 1000);
    }

    function pop(array) {
        if (array.length == 0) {return array}
        array.pop()
        return array
    }

    const transition = useTransition(stack, item => item.key, {
        from: {opacity: 0.5, transform: 'translate3d(0,10rem,0)'},
        enter: {opacity: 1, transition: 'opacity .25s', transform: 'translate3d(0,28rem,0)'},
        leave: {opacity: 0, transition: 'opacity 1s', color: 'red', transform: 'translate3d(0,-28rem,0)'},
        config: {
            duration: 500,
        }
    })

    const showStack = () => {
        return (
            transition.map(({item, props, key}) => 
            <animated.div key={key} style={props}>
                {item}
            </animated.div>)
        )
    }
    
    return (
        <Container fluid style={{paddingTop:60, paddingLeft: 30}}>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Insert
            </Row>
            <Row style={{justifyContent:'left'}}>
            <Form data-testid="values">
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
                </Form>
            </Row>

            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Look
            </Row>
            <Row style={{justifyContent:'left'}}>
                <Form inline onSubmit={onPeek}>
                    <Button type="submit" className="my-1" style={{}}>Peek</Button>
                </Form>
            </Row>
            
            {/* this div holds the stack nodes */}
            <div id="stackbox" style={
                    {width: '18rem', height: '28rem', position: 'relative', right: '9rem',
                    bottom: '12rem', left: '42rem', border: 'solid', borderTop: 0}}>
                {showStack()}
            </div>
        </Container>
    )
}

export default ListForm;