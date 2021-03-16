import React, {useState} from 'react'
import { Button} from 'react-bootstrap';

const Push = ({push}) => {
  const [entry, setEntry] = useState('')
  
  const onSubmit = (e) => {
      e.preventDefault()
      push({entry})
      setEntry('')
  }

  return (
    <form onSubmit={onSubmit}>
      <Button type="submit" className="my-1">Push</Button>
      <input className='push' type='number' value={entry} onChange={(e) => setEntry(e.target.value)} />
    </form>
  )
}

export default Push