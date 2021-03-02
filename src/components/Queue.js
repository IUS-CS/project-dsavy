import React, {useState} from 'react'
import Enqueue from './Enqueue'

const Queue = () => {
  const [queue, setQueue] = useState([])

  const onAdd = ({entry}) => {
    setQueue(queue.concat(entry))
  }

  const onDelete = () => {
    setQueue(queue.shift())
  }

  return (
    <div>
      <h1>hello</h1>
      <Enqueue enqueue={onAdd} />
      <Dequeue dequeue={onDelete} />
      <div>{queue.map((entry) => ( <h3>{entry}</h3>))}</div> 
    </div>
  )
}

export default Queue