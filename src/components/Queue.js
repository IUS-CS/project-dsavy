import React, {useState} from 'react'
import Enqueue from './Enqueue'
import Dequeue from './Dequeue'

const Queue = () => {
  const [queue, setQueue] = useState([])

  const onAdd = ({entry}) => {
    setQueue(queue.concat(entry))
  }

  const onDelete = () => {
    let temp = queue.splice(0, 1)
    setQueue(temp)
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