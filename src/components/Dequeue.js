import React from 'react'

const Dequeue = ({dequeue}) => {
  
  const onClick = (e) => {
      e.preventDefault()
      dequeue()
  }

  return (
        <button onClick={onClick}>Dequeue</button>


  )

}

export default Dequeue