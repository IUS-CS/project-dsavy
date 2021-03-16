import React, {useState} from 'react'
import {useSpring, animated, useTransition} from 'react-spring'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Enqueue from './Enqueue'
import Dequeue from './Dequeue'

const Queue = () => {
  const [queue, setQueue] = useState([])

  const [index, setIndex] = useState(0)
 
  const onAdd = ({entry}) => {
    let a = queue
    a.push({key: index, element: entry})
    setQueue(a)
    setIndex(index + 1)
  }

  const onDelete = () => {
    let a = queue
    a.slice(1)
    setQueue(queue.slice(1))
    setIndex(index - 1)
  }
  
  const transition = useTransition(queue, entry => entry.key, {
    initial: { transform: 'translate3d(0px, 0px, 0)' },
    from: { transform: 'translate3d(0,-60px,0)'},
    enter: { transform: 'translate3d(0,0px,0)'},
    leave: { transform: 'translate3d(0px,100px,0)' }, 
    
  })

  return (
    <div>
      <header className='header'>
        <h1>Queue</h1>
        <h1>FIFO: First In First Out</h1>
      </header>
      <Enqueue enqueue={onAdd} />
      <Dequeue dequeue={onDelete} />
      <Row style={{ display: "inline-flex", paddingTop: 20, paddingLeft: 45 }}>
      <ul className='queue'>
      {transition.map(({item, props, key}) => 
        <animated.div key={key} style={props}><li>{item.element}</li></animated.div>
      )}
      </ul>
      </Row>
      
      
      
    </div>
  )
}

export default Queue