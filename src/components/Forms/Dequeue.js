import React from 'react'
import { Button} from 'react-bootstrap';

const Dequeue = ({dequeue, title}) => {
  
  const onClick = (e) => {
      dequeue()
  }

  return (
    <Button className="my-1" onClick={onClick}>{title}</Button>
  )

}

export default Dequeue