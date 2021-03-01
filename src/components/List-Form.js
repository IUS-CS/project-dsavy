import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const ListForm = () => {
    const [list, setList] = useState([]);

    const onInsert = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());
        setList(list => list.concat(formDataObj.Value));
        console.log(list);
      }

    const onRemove = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        let listCopy = [...list];
        listCopy.splice(formDataObj.Place, 1);
        console.log(`filtered list is ${listCopy}`)
        setList(listCopy);
        console.log(list);
    }


    return (
        <Container fluid>
            <Row style={{justifyContent:'center', fontSize:20, fontWeight:500, paddingTop:15}}>
                Insert
            </Row>
            <Row style={{justifyContent:'center'}}>
            <Form inline onSubmit={onInsert}>
                <Form.Control className="my-1 mr-2" type="text" name="Value" placeholder="Value" />
                <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                    At Position
                </Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    name="Place"
                >
                    <option value="0">Head</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                <Button type="submit" className="my-1">Insert</Button>
            </Form>
            </Row>
            <Row style={{justifyContent:'center', fontSize:20, fontWeight:500, paddingTop:15}}>
                Remove
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Form inline onSubmit={onRemove}>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Element at Position
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        name="Place"
                    >
                        <option value="0">Head</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control>
                    <Button type="submit" className="my-1" style={{}}>Remove</Button>
                </Form>
            </Row>
            <h1>{list}</h1>
        </Container>
    )
}

export default ListForm;