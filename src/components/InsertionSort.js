import React, {useState} from 'react'
import {animated, useTransition} from 'react-spring'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Enqueue from './Forms/Enqueue'
import Dequeue from './Forms/Dequeue'

const InsertionSort = () => {
  const [array, setArray] = useState([])
  const [index, setIndex] = useState(0)

  const arrayStyle =  {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#58C2ED, #1B85DC)",
    width: '5rem',
    height: '18rem',
    bottom: '-2.5px'
  }

  const updateArray = () => {
      setArray(sort(array))
  }

  const sort = (array) => {
    let a = [...array]
    for (let j = 1; j < a.length; j++) {
      let key = a[j]
      let i = j - 1
      while (i >= 0 && a[i].element > key.element) {
        a[i + 1] = a[i]
        i--
      }
      a[i + 1] = key
    }
    return a 
  }

  // updates state of array 
  const onAdd = (entry) => {
    setArray(add(array, entry))
    setIndex(index + 1)
  }

  // returns array with number added to the end
  const add = (array, number) => {
    if (number == '') {
      alert('Enter number')
      return array
    }
    
    if (array.length > 9) {
      alert('Queue is at max length')
      return array
    }

    if (Math.abs(number) > 999) {
      alert('Number must be 3 digits or less')
      return array
    }
    
    array.push({key: index, element: Number(number)})  
    return array
  }

  // updates state of array
  const onDelete = () => {
    setArray(remove(array))
    setIndex(index + 1)
  }

  // returns array with first element deleted
  const remove = (array) => {
    return array.splice(1)  
  }

  const transition = useTransition(array, entry => entry.key, {
    initial: {opacity: 0, transition: 'opacity .5s'},
    from: {opacity: 0, transition: 'opacity .5s'},
    enter: {opacity: 1, transition: 'opacity .5s'},
    leave: {opacity: 0, transition: 'opacity .5s'}
  })

  const displayArray = () => {
    console.log("hello")
    return (transition.map(({item, props, key}) =>         
      <animated.div key={key} style={props}>
        <li style={{listStyle: 'none'}}>
          <Col style={Object.assign({border: 'solid', borderLeft: 0, left: `${array.indexOf(item)*5}rem`}, arrayStyle)} >
            <h4 style={{color: 'white'}}>{item.element}</h4>
          </Col>
        </li>
      </animated.div>
    ))
  }

  return (
    <Container>
      <Row><Enqueue enqueue={onAdd} title={'Insert'}/></Row>
      <Row><Dequeue dequeue={onDelete} title={'Remove'}/></Row>
      <Row><button className="my-1" onClick={updateArray}>Sort</button></Row>
      <Row>
        <div style={{position: 'relative', width: '50rem', height: '18rem', margin: '0 auto' , border: 'solid'}}>
          <ul>{displayArray()}</ul>
        </div>
      </Row>
    </Container>
  )

}

export default InsertionSort