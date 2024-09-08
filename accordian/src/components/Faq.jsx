import React from 'react'
import Accordion from './Accordion';
import data from "../data.json"

function Faq() {
    // console.log(data.faqs);
    
  return (
    <div className='faq'>
        <h1>FAQ'S</h1>
        {
            data.faqs.map((obj,index)=>{
                return <Accordion qna= {obj} key={index}/>
            })
        }
        {/* <Accordion/> */}
    </div>
  )
}

export default Faq;