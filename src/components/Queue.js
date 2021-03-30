import React, {useState} from 'react'
import {animated, useTransition} from 'react-spring'
import {Container, Row, Col} from 'react-bootstrap';
import Enqueue from './Forms/Enqueue'
import Dequeue from './Forms/Dequeue'

const Queue = () => {
  const [array, setArray] = useState([])
  const [index, setIndex] = useState(0)
  
  const queueStyle =  {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#58C2ED, #1B85DC)",
    width: '5rem',
    height: '18rem',
    bottom: '-2.5px'
  }
  
  // updates state of array 
  const onAdd = (entry) => {
    setArray(enqueue(array, entry))
    setIndex(index + 1)
  }

  // returns array with number added to the end
  const enqueue = (queue, number) => {
    if (number == '') {
      alert('Enter number')
      return queue
    }
    
    if (queue.length > 9) {
      alert('Queue is at max length')
      return queue
    }

    if (Math.abs(number) > 999) {
      alert('Number must be 3 digits or less')
      return queue
    }
    
    queue.push({key: index, element: number})
    
    return queue
  }

  // updates state of array
  const onDelete = () => {
    setArray(dequeue(array))
    setIndex(index + 1)
  }

  // returns array with first element deleted
  const dequeue = (queue) => {
    return queue.splice(1)  
  }
  
  const transition = useTransition(array, entry => entry.key, {
    initial: {opacity: 0},
    from: {opacity: 0},
    enter: {opacity: 1, transition: 'opacity .25s'},
    leave: {opacity: 0, transition: 'opacity .25s', color: 'red'}
  })

  // display array with animation when added to or removed
  const displayQueue = () => {
    console.log("hello")
    return (transition.map(({item, props, key}) =>         
      <animated.div key={key} style={props}>
        <li style={{listStyle: 'none'}}>
          <Col style={Object.assign({border: 'solid', borderLeft: 0, left: `${array.indexOf(item)*5}rem`}, queueStyle)} >
            <h4 style={{color: 'white'}}>{item.element}</h4>
          </Col>
        </li>
      </animated.div>
    ))
  }

  return (
    <Container>
      <header className='header'>
        <h1>Queue</h1>
        <h1>FIFO: First In First Out</h1>
      </header>
      <Row><Enqueue enqueue={onAdd} /></Row>
      <Row><Dequeue dequeue={onDelete} /></Row>
      <Row>
        <div style={{position: 'relative', width: '50rem', height: '18rem', margin: '0 auto' , border: 'solid'}}>
          <ul>{displayQueue()}</ul>
        </div>
      </Row>
    </Container>
  )
}

export default Queue