//React Imports
import React from 'react'

//Import the list of JS objects that generates ALL policy descriptions.
import { PolicyItems } from '../PolicyItems.js';

//CSS
import '../../Styles/Policies.css'

const PolicyEntry = ({ policyItem }) => {
    return (
        <div className='policy'>
            <p><b>{policyItem.title}</b>: {policyItem.blurb}</p>
            {policyItem.bullets ? 
                <ul>
                    {policyItem.bullets.map((bullet, index) => {
                        return (
                            <li key={index}>{bullet}</li>
                        );
                    })}
                </ul> 
            : <></> }
            {policyItem.second_blurb ? <p>{policyItem.second_blurb}</p> : <></>}
        </div>
    )
}

/**
 * The main element for the FAQ page.
 */
const Policies = () => {
  return (
    <div className='container' id="policies">
        <h1>Policies and Procedures</h1>
        <div className='policies-container'>
            {PolicyItems.map((item, index) => {
                return (
                    <PolicyEntry policyItem={item} key={index} />
                );
            })}
        </div>
    </div>
  )
}

export default Policies