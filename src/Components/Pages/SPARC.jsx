//React Imports
import React from 'react'
import { Link } from 'react-router-dom'

//CSS Imports
import '../../Styles/Programs.css'

//Images
import BarKids from '../..//Images/kids-on-bar.jpg'

/**
 * Main element for the "SPARC" page.
 */
const Sparc = () => {
  return (
    <div className="program container">
      <h1>S.P.A.R.C.</h1>
      <h2>Synergy Performing Arts Repertory Company</h2>

      <div className="program-blurb">
        <div className="img-and-next-button">
          <img src={BarKids} alt="Kids at Synergy" className="about-img" />
        </div>
        <div>
        <p>
          Founded in 2019, SPARC grew out of a desire to provide our students
          with more performance opportunities. Students are selected to join
          SPARC each year based on teacher recommendations. The current company
          of 30 dancers are divided into Senior and Junior Divisions performing
          some works together and some by division. Our previous performances
          were “We Belong” in 2022 and "It's How You Frame It" in 2023. We are
          looking forward to kicking off our 2024 season in a couple of weeks.
        </p>
        <h3>Interested in joining SPARC?</h3>
        <Link to="/contact">Contact Us!</Link>
        </div>
      </div>
    </div>
  );
}

export default Sparc