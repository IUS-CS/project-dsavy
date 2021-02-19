import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ClickableImage from './Home-image';

function Home() {
  return (
      <Container fluid='sm'>
        <Row style={{paddingTop:40}}>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/linkedlist' description='Text...'/></Col>
          <Col><ClickableImage name='Stack' image='../images/Stack.png' page='/about' description='Text...'/></Col>
          <Col><ClickableImage name='Data Structure' image='../images/LinkedList.png' page='/about' description='Text...'/></Col>
        </Row>
        <Row style={{paddingTop:40}}>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about' description='Text...'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about' description='Text...'/></Col>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/about' description='Text...'/></Col>
        </Row>
      </Container>
  );
}

export default Home;