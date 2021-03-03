import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Push from './Push'
import Pop from './Pop'

const ListForm = ({list, onListChange}) => {
    const [stack, setStack] = useState([])

    const onPush = ({entry}) => {
      setStack([entry].concat(stack))
    }
  
    const onPop = () => {
      setStack(stack.slice(1))
    }

    return (
        <Container fluid style={{paddingTop:60, paddingLeft: 60}}>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Insert
            </Row>
            <Row style={{justifyContent:'left'}}>
            
                <Push push={onPush} />
                {/* <Button type="submit" className="my-1">Push</Button> */}
            </Row>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Remove
            </Row>
            <Row style={{justifyContent:'left'}}>
                <Form inline onSubmit={onPop}>
                    <Pop pop={onPop} />
                    Element on the Top
                </Form>
            </Row>
            <div className='stack'>{stack.map((entry) => (<li>{entry}</li>))}</div> 
        </Container>
    )
}

export default ListForm;