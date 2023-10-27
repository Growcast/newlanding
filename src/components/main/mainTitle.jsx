import React from 'react'
//import { useSpring, animated } from '@react-spring/web'
import { useTrail, animated } from '@react-spring/web'
import { Text } from '@chakra-ui/react'

export default function MainTitle() {
    
    //TRAIL
    const [trails, api] = useTrail(
    1,
    () => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            mass: 15,
            friction: 60,
            tension: 280,
            duration: 3500
          }
    }),[])
    
  return (
    <div>
        
        {/* TRAIL */}
        {trails.map((props, index) => (
        <animated.div style={props} key={index}>
            {/* <h1>Growcast</h1> */}
            <Text color={'#ffffff'} m={0} pt={'40px'} textAlign={'center'}  ><h1>La evolución tecnológica de la naturaleza.</h1></Text>
        </animated.div>
    ))}
    </div>
  )
}
