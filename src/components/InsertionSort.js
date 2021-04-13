import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Enqueue from './Forms/Enqueue'
import Dequeue from './Forms/Dequeue'

const InsertionSort = () => {
  const [array, setArray] = useState([])
  const [index, setIndex] = useState(0)
  const [running, setRunning] = useState(false)
  const [i, setI] = useState(1)
  const [delay, setDelay] = useState(50)
  const [key, setKey] = useState()
  
  const arrayStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: "linear-gradient(#58C2ED, #1B85DC)",
    width: '5rem',
    height: '18rem',
    bottom: '-2.5px'
  }
  
  const sort = (a) => {
    let temp = [...a]
    let tempIndex = index
    let tempKey = key
    
    // display each swap when comparing to key  
    if (tempIndex >= 0 && temp[tempIndex].element > tempKey) {
      temp[tempIndex + 1].element = temp[tempIndex].element
      tempIndex--
      setIndex(tempIndex)
      return temp
    }
    // now change keys and display sorted array up to this point

    setI(i + 1)
    console.log(i)

    // if array is not completely sorted set new key
    if (i < array.length) setKey(temp[i].element)

    setIndex(i - 1)
    temp[tempIndex + 1].element = tempKey
    return temp
  }

  const useInterval = (callbackfn, delay) => {
    const savedCallback = useRef();
  
    // remember the most recent callback
    useEffect(() => {
      savedCallback.current = callbackfn;
    }, [callbackfn]);
  
    // set up the interval
    useEffect(() => {
      function call() {
        savedCallback.current();
      }
      if (delay !== null) {
        let interval = setInterval(call, delay);
        return () => clearInterval(interval);
      }
    }, [delay])
  }

  useInterval(() => {
    if (running) {
        if (i < array.length+1) {
          setArray(sort(array))
        }
    }
  }, (delay !== null)? (delay*25): null)

  const handleVis = (event) => {
    event.preventDefault()
    setRunning(true)
  }

  // updates state of array 
  const onAdd = (entry) => {
    setArray(add(array, entry))
  }

  // returns array with number added to the end
  const add = (array, number) => {
    let a = [...array]
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
    
    a.push({element: Number(number), search: false})  
    return a
  }

  // updates state of array
  const onDelete = () => {
    setArray(remove(array))
  }

  // returns array with first element deleted
  const remove = (array) => {
    return array.splice(1)  
  }

  const displayArray = () => {
    return (array.map((item) => 
        <li style={{listStyle: 'none'}}>
          <Col style={Object.assign({border: 'solid', borderLeft: 0, left: `${array.indexOf(item)*5}rem`}, arrayStyle)} >
            <h4 style={item.search ? {color: 'red'} : {color: 'white'}}>{item.element}</h4>
          </Col>
        </li>
    ))
  }

  return (
    <Container>
      <Row><Enqueue enqueue={onAdd} title={'Insert'}/></Row>
      <Row><Dequeue dequeue={onDelete} title={'Remove'}/></Row>
      <Row>
        <Button className="my-1" onClick={handleVis}>Sort</Button>
        <div className="my-3" style={{paddingLeft: 10}}>
          <label htmlFor="speed-range" style={{margin: '0 auto'}}>Speed</label>
          <input type="range" className="custom-range" id="speed-range" onChange={event => setDelay(event.target.value)} style={{transform: 'rotate(180deg)'}} />
        </div>
      </Row>
      <Row>
        <div style={{position: 'relative', width: '50rem', height: '18rem', margin: '0 auto' , border: 'solid'}}>
          <ul>{displayArray()}</ul>
        </div>
      </Row>
      <Row>Key being sorted: {key}</Row>
      <Row>From index {index+1}</Row>
    </Container>
  )
}

export default InsertionSort

 