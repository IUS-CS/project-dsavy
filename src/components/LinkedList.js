import React, {useState} from 'react';
import { useSpring, animated, Trail } from 'react-spring';
import Node from './List-Node';

const LinkedList = () => {
    const [key, setKey] = useState(1);
  
    const scrolling = useSpring({
      from: { transform: "translate(60%,0)" },
      to: { transform: "translate(-60%,0)" },
      config: { duration: 20000 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    })
  
    return (
      <div key={key} style={{paddingTop:120}}>
        <animated.div style={scrolling}><Node/></animated.div>
      </div>
    )
  }
  
  export default LinkedList;