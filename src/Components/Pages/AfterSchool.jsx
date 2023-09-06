//React Imports
import React from 'react'
import { Link } from 'react-router-dom'

//CSS Imports
import '../../Styles/Programs.css'

//Images and Docs
import BarKids from '../..//Images/kids-on-bar.jpg'
import EarlyRelease from '../../Documents/EarlyReleaseProgram.pdf'

/**
 * Main element for the "After School Programming" page.
 */
const AfterSchool = () => {
  return (
    <div className="program container">
      <h1>After School Programs</h1>
      <h2>Bus Program and Early Release</h2>
      <div className="program-blurb">
        <div>
          <img src={BarKids} alt="Kids at Synergy" className="about-img" />
        </div>
        <div>
          <h3>Meet The Bus Program</h3>
          <p>
            Synergy's bus program is designed to help busy parents by
            simplifying their driving load. Children within from Jericho
            Elementary School and Underhill Central School who are registered
            for Synergy classes Monday through Friday between 3:00 and 3:45 may
            also join the bus program. Students ride busses 3 and 10 from their
            home schools to Browns River where a member of our Bus program staff
            meets them and escorts them to Synergy. Snacks are provided. Games,
            activities and supervision are arranged for any remaining time,
            along with assistance getting dressed and ready for dance classes.
            Cost is $9 per week. There is no charge for the weeks your student
            does not attend due to illness, appointments or other conflicts.
            Registration is available through the website or your parent portal.
          </p>
          <div className="links">
            <Link to="/classtables-afterschool">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="program-blurb">
        <div>
          <img src={BarKids} alt="Kids at Synergy" className="about-img" />
        </div>
        <div>
          <h3>Early Release</h3>
          <p>
            Is your student part of MMUUSD? If so, they might enjoy taking part
            in our Early Release program, 8 dance themed Wednesdays, one for
            each early release day of the school year. For more information, see
            the links below!
          </p>
          <div className="links">
            <a href={EarlyRelease} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
            <Link to="/classtables-afterschool">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterSchool