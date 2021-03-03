import React from 'react'
import { Button} from 'react-bootstrap';

const Dequeue = ({dequeue}) => {
  
  const onClick = (e) => {
      dequeue()
  }

  return (
    <Button className="my-1" onClick={onClick}>Dequeue</Button>
  )

}

export default Dequeue