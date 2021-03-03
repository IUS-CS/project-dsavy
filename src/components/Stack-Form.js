import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const ListForm = ({list, onListChange}) => {
    const [queue, setQueue] = useState([])

    const onPush = ({entry}) => {
      setQueue(queue.concat(entry))
    }
  
    const onPop = () => {
      setQueue(queue.slice(1))
    }

    return (
        <Container fluid style={{paddingTop:60, paddingLeft: 60}}>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Insert
            </Row>
            <Row style={{justifyContent:'left'}}>
            <Form inline onSubmit={onPush}>
                <Form.Control className="my-1 mr-2" type="text" name="Value" placeholder="Value" />
                
                <Button type="submit" className="my-1">Push</Button>
            </Form>
            </Row>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Remove
            </Row>
            <Row style={{justifyContent:'left'}}>
                <Form inline onSubmit={onPop}>
                    <Button type="submit" className="my-1" style={{marginRight: 5}}>Pop</Button>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Element on the Top
                    </Form.Label>
                </Form>
            </Row>
            <Row style={{justifyContent:'left', fontSize:20, fontWeight:500, paddingTop:15}}>
                Peek
            </Row>
            <Row style={{justifyContent:'left'}}>
                <Form inline onSubmit={onRemove}>
                    <Button type="submit" className="my-1" style={{marginRight: 5}}>Pop</Button>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Element on the Top
                    </Form.Label>
                </Form>
            </Row>
        </Container>
    )
}

export default ListForm;