import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Check from '../Char-Limit-Error';

const ListForm = ({list, onListChange}) => {
    const handleChange = e => {
        onListChange(e);
    }

    const [validLength, setValidLength] = useState(true);

    const onInsert = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());

        // Check length of new element is not over limit
        if (formDataObj.Value.length > 6) {
            setValidLength(false);
        }
        else {
            setValidLength(true);
            if (formDataObj.Place === 'Tail'){
                handleChange(list => list.concat({key: list.length, item: formDataObj.Value}));
            }
            else if (formDataObj.Place === '0'){
                let newList = [{key: 0, item: formDataObj.Value}];
                for (let i = 0; i < list.length; i++) {
                    list[i].key = i + 1;
                    newList.push(list[i]);
                }
                handleChange(list => newList);
            }
            else {
                let currentKey = parseInt(formDataObj.Place);
                let newItem = {key: currentKey, item: formDataObj.Value};
                let newList = [];
                
                for (let i = 0; i < list.length + 1; i++) {
                    if (currentKey === i) {
                        newList.push(newItem);
                    }
                    else if (currentKey > i) {
                        list[i].key = i;
                        newList.push(list[i]);
                    }
                    else if (currentKey < i) {
                        list[i - 1].key = i;
                        newList.push(list[i - 1]);
                    }
                }
                handleChange(list => newList);
            }
            console.log(list);
          }
        }
        

    const onRemove = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        let listCopy = [...list];
        if (formDataObj.Place === 'Tail') {
            listCopy.splice((listCopy.length - 1), 1);
        }
        else {
            listCopy.splice(formDataObj.Place, 1);
        }
        
        handleChange(listCopy);
        console.log(list);
    }


    return (
        <div>
        <Check input={validLength}></Check>
        <Container fluid style={{paddingTop:60}}>
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
                    <option value="Tail">Tail</option>
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
                        <option value="Tail">Tail</option>

                    </Form.Control>
                    <Button type="submit" className="my-1" style={{}}>Remove</Button>
                </Form>
            </Row>
        </Container>
        </div>
    )
}

export default ListForm;