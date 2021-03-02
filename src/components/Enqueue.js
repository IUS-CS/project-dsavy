import React, {useState} from 'react'

const Enqueue = ({enqueue}) => {
  const [entry, setEntry] = useState('')
  
  const onSubmit = (e) => {
      e.preventDefault()
      enqueue({entry})
      setEntry('')
  }

  return (
      <form onSubmit={onSubmit}>
        <button type="submit">Enqueue</button>
        <input type='text' value={entry} onChange={(e) => setEntry(e.target.value)} />
        
      </form>
  )

}

export default Enqueue