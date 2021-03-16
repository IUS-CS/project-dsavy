import React, {useState} from 'react'
import {animated, useTransition} from 'react-spring'
import {Container, Row, Col} from 'react-bootstrap';
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
    setQueue(queue.slice(1))
    setIndex(index - 1)
  }
  
  const transition = useTransition(queue, entry => entry.key, {
    initial: {opacity: 0, display: 'inline'},
    from: {opacity: 0, display: 'inline' },
    enter: {opacity: 1, transition: 'opacity .5s'},
    leave: {opacity: 0, transition: 'opacity .5s' }, 
  })

  return (
    <Container>
      <header className='header'>
        <h1>Queue</h1>
        <h1>FIFO: First In First Out</h1>
      </header>
      <Row><Enqueue enqueue={onAdd} /></Row>
      <Row><Dequeue dequeue={onDelete} /></Row>
      <ul className='queue'>
      {transition.map(({item, props, key}) => 
        <animated.div key={key} style={props}><li style={{backgroundColor: 'red', borderRadius:'5px', padding:'5px'}}>{item.element}</li></animated.div>
      )}
      </ul>
    </Container>
  )}

export default Queue