import React, { useState } from 'react'

function Accordion({qna}) {

     let [show,setShow]= useState(false);


  return (
    <div className='accordion'>
        <h3>{qna.question}  <span onClick={()=>setShow(!show)}>{show?"-":"+"} </span></h3>
       
        {show? <p> {qna.answer} </p>:""}
    </div>
  )
}

export default Accordion;