import React, {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import Node from './List-Node';
import ListForm from './Forms/List-Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LinkedList = () => {
    // State of the list in List-Form is pushed up to this LinkedList component
    const [list, setList] = useState([]);

    const [key, setKey] = useState(1);
  
    const transitions = useTransition(list, item => item.key, {
      initial: { transform: 'translate3d(0%, 0%,0)' },
      from: {  transform: 'translate3d(0%,-100%,0)' },
      enter: { transform: 'translate3d(0%, 0%,0)' },
      leave: { transform: 'translate3d(100%,0%,0)' }
    })
  
    const listItems = list.map((element) => <Col key={element}><Node value={element}></Node></Col>)
    return (
    //   <div>
    //     <ListForm list={list} onListChange={setList}/>
    //   <div style={{display:"inline-flex", paddingTop:20}}>
    //   {transitions.map(({ item, props, key }) =>
    //   <animated.div  
    //     key={key} 
    //     style={props}>
    //     <Node value={item.item} style={{margin:20}}/>
    //     <Pointer></Pointer>
    //   </animated.div>
    // )}
    // </div>
    // </div>
      <div>
        <ListForm list={list} onListChange={setList} />
        <Row style={{ display: "inline-flex", paddingTop: 20, paddingLeft: 45 }}>
          {transitions.map(({ item, props, key }) =>
            <animated.div
              key={key}
              style={props}>
              <Col>
                <Node value={item.item} style={{ margin: 20 }} />
              </Col>
            </animated.div>
          )}
        </Row>
      </div>
    )
  }
  
  export default LinkedList;