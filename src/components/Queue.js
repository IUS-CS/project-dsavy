import React, {useState} from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Enqueue from './Enqueue'
import Dequeue from './Dequeue'

const Queue = () => {
  const [queue, setQueue] = useState([])

  const onAdd = ({entry}) => {
    setQueue(queue.concat(entry))
  }

  const onDelete = () => {
    setQueue(queue.slice(1))
  }

  return (
    <div>
      <header className='header'>
        <h1>Queue</h1>
        <h1>FIFO: First In First Out</h1>
      </header>
      <Enqueue enqueue={onAdd} />
      <Dequeue dequeue={onDelete} />
      <div className='queue'>{queue.map((entry) => (<li>{entry}</li>))}</div> 
    </div>
  )
}

export default Queue