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
      <h1>hello</h1>
      <Enqueue enqueue={onAdd} />
      <Dequeue dequeue={onDelete} />
      <div className='queue'>{queue.map((entry) => (<li>{entry}</li>))}</div> 
    </div>
  )
}

export default Queue