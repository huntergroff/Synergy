//React Imports
import React, { useState } from 'react'

//Icons and Images
import { BiChevronDown } from 'react-icons/bi'

//CSS
import '../../Styles/FAQ.css'

//Import the list of JS objects that generates ALL FAQs.
import { FAQItems } from '../FAQItems.js'

/**
 * Given a question and answer, generates one expandable FAQ entry.
 * @param {question} the question, displayed always
 * @param {answer} the answer, displayed on expand. 
 */
const FAQEntry = ({ question, answer }) => {
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

/**
 * The main element for the FAQ page.
 */
const FAQ = () => {
  return (
    <div className='faq container'>
        <h1>{window.innerWidth > 720 ? "Frequently Asked Questions" : "FAQ"}</h1>
        <div className='questions-container'>
            {FAQItems.map((item, index) => {
                return (
                    <FAQEntry question={item.question} answer={item.answer} key={index}/>
                );
            })}
        </div>
    </div>
  )
}

export default FAQ