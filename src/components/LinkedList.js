import React, {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import Node from './List-Node';
import ListForm from './Forms/List-Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LinkedList = () => {
    // State of the list in List-Form is pushed up to this LinkedList component
    const [list, setList] = useState([
      {key: 1, item: "one"},
      {key: 2, item: "two"}
    ]);

    const [key, setKey] = useState(1);
  
    const transitions = useTransition(list, item => item.key, {
      initial: { transform: 'translate3d(0%, 0%,0)' },
      from: {  transform: 'translate3d(0%,-100%,0)' },
      enter: { transform: 'translate3d(0%, 0%,0)' },
      leave: { transform: 'translate3d(100%,0%,0)' }
    })
  
    const listItems = list.map((element) => <Col key={element}><Node value={element}></Node></Col>)
    return (
      // <Container style={{paddingTop:40}}>
      //   <Row>
      //     {/* <animated.div style={scrolling}> */}
      //       {listItems}
      //     {/* </animated.div> */}
      //   </Row>
      //   <ListForm list={list} onListChange={setList}/>
      // </Container>
      <div>
        <ListForm list={list} onListChange={setList}/>
      <div style={{display:"inline-flex", justifyContent:"center"}}>
      {transitions.map(({ item, props, key }) =>
      <animated.div 
        key={key} 
        style={props}>
        <Node value={item.item}/>
      </animated.div>
    )}
    </div>
    </div>
    )
  }
  
  export default LinkedList;