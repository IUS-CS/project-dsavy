import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ClickableImage from './Home-image';
import Card from './Card.js'

function Home() {
  return (
      <Container className="container-fluid d-flex justify-content-center">
        <Row>
            <Col>
                <Card name="Linked Lists" image="../images/LinkedList.png" page='/linkedlist'
                    description="A linear data structure in which a node has a value and a pointer to next node"/>
            </Col>
            <Col>
                <Card name="Stacks" image="../images/LinkedList.png" />
            </Col>
            <Col>
                <Card name="Queues" image="../images/LinkedList.png" />
            </Col>
        </Row>

        {/* <Row style={{padding:10}}>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/linkedlist'/></Col>
          <Col><ClickableImage name='Stack' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Data Structure' image='../images/LinkedList.png' page='/about'/></Col>
        </Row>
        <Row>
        <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
        </Row> */}
      </Container>
  );
}

export default Home;