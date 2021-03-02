import React from 'react'

const Button = ({ type, name }) => {
  return (
    <button type={type}>{name}</button>
  )
}

export default Button