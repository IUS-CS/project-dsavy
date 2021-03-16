import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import Node from './List-Node';
import ListForm from './Forms/List-Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LinkedList = () => {
    // State of the list in List-Form is pushed up to this LinkedList component
    const [list, setList] = useState([]);

    const [key, setKey] = useState(1);
  
    const scrolling = useSpring({
      from: { transform: "translateX(0px)" },
      to: { transform: "translateX(100px)" },
      config: { duration: 500 },
      reset: false
    })
  
    const listItems = list.map((element) => <Col key={element}><Node value={element}></Node></Col>)
    return (
      <Container style={{paddingTop:40}}>
        <Row>
          {/* <animated.div style={scrolling}> */}
            {listItems}
          {/* </animated.div> */}
        </Row>
        <ListForm list={list} onListChange={setList}/>
      </Container>
    )
  }
  
  export default LinkedList;