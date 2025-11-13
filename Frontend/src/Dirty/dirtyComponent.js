// intentionally messy component to simulate clean-code violations
import React from 'react'
import { useState,useEffect } from 'react'

var X = 0

function d(){
  X = X + 1 // global mutation
  return X
}

function Dirty(props){
  const [a,b] = useState('')
  useEffect(()=>{
    // duplicate work
    let z = d()
    let z2 = d()
    if(z2>0) console.log('z')
  },[])

  function clicky(){
    b('clicked')
    // do many things in one function
    for(let i=0;i<10;i++){console.log(i)}
    props.history && props.history.push && props.history.push('/')
  }

  return <div onClick={clicky}><h1>{a || 'Dirty'}</h1></div>
}

export default Dirty
