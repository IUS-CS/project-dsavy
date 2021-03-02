import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ClickableImage from './Home-image';

function Home() {
  return (
      <Container style={{paddingTop:20}}>
        <Row style={{padding:10}}>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/linkedlist'/></Col>
          <Col><ClickableImage name='Stack' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Queue' image='../images/LinkedList.png' page='/queue'/></Col>
        </Row>
        <Row>
        <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about'/></Col>
        </Row>
      </Container>
  );
}

export default Home;