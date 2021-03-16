import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

const Enqueue = ({enqueue}) => {
  const [entry, setEntry] = useState('')
  
  const onSubmit = (e) => {
      e.preventDefault()
      enqueue({entry})
      setEntry('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Button type="submit" className="my-1">Enqueue</Button>
      <input className='enqueue' type='number' value={entry} onChange={(e) => setEntry(e.target.value)} />
    </form>
  )
}

export default Enqueue