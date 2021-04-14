import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ClickableImage from './Home-image';

const Home = () => {
  return (
      <Container fluid='sm'>
        <h2 style={{paddingTop:40, textAlign: 'center'}}>Data Structures</h2>
        <Row style={{paddingTop:20}}>
          <Col><ClickableImage name='Linked List' image='../images/LinkedList.png' page='/linkedlist'
            description='A singly linked list is a one directional list where elements are not placed by their order in memory.'/></Col>

          <Col><ClickableImage name='Stack' image='../images/Stack.png' page='/stack'
            description='A stack adds and removes its elements only from the top, last element added is the first one able to get out.'/></Col>
          
          <Col><ClickableImage name='Queue' image='../images/LinkedList.png' page='/queue'
            description='A queue adds items at the end, and removes them from the front. First element added is the first one to be removed.'/></Col>
          
          <Col><ClickableImage name='Binary Search Tree' image='../images/ComingSoon.png' page='/'
            description='A binary search tree is a hierarchical data structure in which each node in the tree has two or less child nodes. The values on left are less than the node, the values on right are greater than the node.'/></Col>
        </Row>
        <h2 style={{textAlign: 'center'}}>Algorithms</h2>
        <Row style={{paddingTop:20, paddingBottom:40}}>
          <Col><ClickableImage name='Insertion Sort' image='../images/LinkedList.png' page='/insertionsort'
            description='Insertion sort is a sorting algorithm that sorts the elements, one at each time. It selects the element and inserts it at the appropriatae position.'/></Col>
          
          <Col><ClickableImage name='Recursion' image='../images/Recursion.png' page='/recursion'
            description='Recursion is a method of solving problems where the solution to a particular instance depends on the smaller, previous instances. Usually, in programming, a method calling itself.'/></Col>
          
          <Col><ClickableImage name='Merge Sort' image='../images/ComingSoon.png' page='/'
            description='Merge sort is an efficient sorting algorithm that sorts elements by dividing the list into halves and merging them in a sorted order.'/></Col>
        </Row>
      </Container>
  );
}

export default Home;