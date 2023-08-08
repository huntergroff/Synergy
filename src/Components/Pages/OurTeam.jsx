//React Imports
import React, { useRef } from 'react'

//Icons and Images
import {HiArrowDown} from 'react-icons/hi'
import StaffPic from '../../Images/Staff/staff-pic.jpg'
import StudioNight from '../..//Images/studio-night-tent.jpg'
import BarKids from '../..//Images/kids-on-bar.jpg'
import MezzanineKids from '../..//Images/mezzanine-kids.jpg'
import HollydazeAlumni from '../..//Images/hollydaze-alumni.jpg'
import LilyTeaching from '../..//Images/lily-teaching.jpg'

//CSS
import '../../Styles/About.css'

//Import the lists of JS objects that generate ALL Staff Bios.
import { TeacherBioItems, TABioItems, StudentTeacherBioItems, AdminBioItems } from '../StaffBioItems.js'

/**
 * Renders a single teacher bio given the following params:
 * @param {name} the teacher's name
 * @param {bio} the teacher's bio
 * @param {picture} the teacher's picture 
 */
const TeacherBio = ({ name, bio, picture }) => {
  return (
    <div className='teacher'>
      {picture}
      <div className='name-and-bio'>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  )
}

/**
 * Renders a list of staff given a list of bio items
 */
const renderBios = (bioItemsList) => {
  return bioItemsList.map((teacherItem, index) => {
    return (
      <TeacherBio name={teacherItem.name} bio={teacherItem.bio} picture={teacherItem.picture} key={index} />
    );
  })
}

/**
 * Renders all the staff bios and a short blurb at the top.
 */
const Teachers = () => {
  return (

    <div className='about'>
      <div id="teachers">
        <div className='title'>
          <h1>Our Team</h1>
          <img src={StaffPic} alt="Synergy Staff 2022-2023" className='staff-pic'></img>
          <h2>
            Our focus at Synergy Dance is to instill a love of dance in our entire community. 
            Our students will find themselves in an environment where they feel safe to express 
            themselves on the dance floor and will be challenged to continue to achieve. At Synergy 
            Dance we believe that a solid technical foundation is critical in the development of a 
            successful dancer. Our teachers provide instruction that combines proper technique with a 
            balance of fun that enables all our students to reach the highest level of dancing that will 
            carry them through a lifetime love of dance.
          </h2>
        </div>

        <h4>Teachers</h4>
        {renderBios(TeacherBioItems)}
        <h4>Student Teachers</h4>
        {renderBios(StudentTeacherBioItems)}
        <h4>Teaching Assistants</h4>
        {renderBios(TABioItems)}
        <h4>Administrative Assistants</h4>
        {renderBios(AdminBioItems)}
      </div>
    </div>
  )
}

export default Teachers