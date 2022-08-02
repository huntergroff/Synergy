import React, { useState } from 'react'
import '../../Styles/FAQ.css'
import { BiChevronDown } from 'react-icons/bi'
import { FAQItems } from '../FAQItems.js'


const FAQRow = ({ question, answer }) => {
    const [expand, setExpand] = useState(false);
    const toggleExpand = () => {setExpand(!expand)};

    return (
        <div className={`question ${expand ? 'expand' : ''}`} onClick={toggleExpand}>
            <div className='q'>
                <h2>{question}</h2>
                <BiChevronDown className={`arrow ${expand ? 'expand' : ''}`}/>
            </div>
            <div className='a'>
                <p>{answer}</p>
            </div>
        </div>
    )
}

const FAQ = () => {
  return (
    <div className='faq container'>
        <h1>Frequently Asked Questions</h1>
        <div className='questions-container'>
            {FAQItems.map((item, index) => {
                return (
                    <FAQRow question={item.question} answer={item.answer} />
                );
            })}
        </div>
    </div>
  )
}

export default FAQ