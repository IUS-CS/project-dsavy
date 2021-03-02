import React, {useState} from 'react'
import DisplayQueue from './DisplayQueue'

const Queue = () => {
  const [queue, setQueue] = useState([])
  const [entry, setEntry] = useState(0)

  const handleQueue = (e) => {
    e.preventDefault();
    setQueue(queue.concat(entry))
  }
  
  const handleNewEntry= (e) => {
    setEntry(e.target.value)
  }
  
  return (
    <div>
      <header className = "header">
        <h1>Queue</h1>
        <h3>Last In First Out LIFO</h3>
      </header>
      <form className="Enqueue" onSubmit={handleQueue}>
        <input onChange={handleNewEntry} value={entry} />
        <button type="submit">Enqueue</button>
      </form>
      <ul>
      <DisplayQueue entries={queue} />
      </ul>
    </div>
  
  )
}

export default Queue