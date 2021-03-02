import React from 'react'

const DisplayQueue = ({entries}) => {
  
  return (
    entries.map((entry) => <li>{entry}</li>)
  
  )
}

export default DisplayQueue