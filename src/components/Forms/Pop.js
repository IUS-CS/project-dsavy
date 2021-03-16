import React from 'react'
import { Button} from 'react-bootstrap';

const Pop = ({pop}) => {
  
  const onClick = (e) => {
      e.preventDefault()
      pop()
  }

  return (
    <Button className="my-1" onClick={onClick}>Pop</Button>
  )

}

export default Pop