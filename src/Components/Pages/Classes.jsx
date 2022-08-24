//React Imports
import React from 'react'
import { Link } from 'react-router-dom'

//Icons and Images
import { AiOutlineCompass, AiOutlineFire, AiOutlineClockCircle } from 'react-icons/ai'
import { RiFocus3Line } from 'react-icons/ri'
import { GoCalendar } from 'react-icons/go'

//CSS
import '../../Styles/Classes.css'

//Import the list of JS objects that generates ALL class descriptions.
import { ClassDescriptionItems } from '../ClassDescriptionItems';


/**
 * Creates a styled link with a title, short blurb, and icon.
 * @param {title} the large text of the link
 * @param {blurb} the small text of the link
 * @param {icon} the icon behind the link
 * @param {link} the destination of the link 
 */
const Pathway = ({title, blurb, icon, link}) => {
  return (
    <div className='classes-pathway'>
        <Link to={link}>
            <h2>{title}</h2>
            <p>{blurb}</p>
        </Link>
        {icon}
    </div>
  )
}

/**
 * Draws info from a descriptionItem (one object from ClassDescriptionItems.js)
 * and renders all info: category/category blurb followed by all classes and blurbs within the category.
 * For instance, one descriptionItem, "Ballet", would contain the image, title, and blurb for ballet,
 * as well as the title and blurb for every ballet class offered.
 * @param {descriptionItem} the descriptionItem object taken from ClassDescriptionItems.js
 */
const ClassDescription = ({ descriptionItem, index }) => {
  return (
    <div className='class-description-container' key={index}>
        <div id={descriptionItem.categoryUrlTag}>
            <div className='header'>
                <h2>{descriptionItem.categoryTitle}</h2>
                <div className='blurb'>
                  {descriptionItem.categoryImg}
                  <p>{descriptionItem.categoryBlurb}</p>
                </div>
            </div>
            {descriptionItem.classes.map((classItem, index) => {
                return (
                    <div className='description' key={index}>
                        <div className='title-and-age'>
                            <h3>{classItem.title}</h3>
                            <h4>{classItem.age}</h4>
                        </div>
                        <p>{classItem.blurb}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

/**
 * Main element for the "classes" page. 
 */
const Classes = () => {
  return (
    <>
      <div className='classes'>
        <div className='classes-at-synergy container'>
          <h1>Classes at Synergy</h1>
          <h3>
            At Synergy Dance, we pride ourselves in featuring classes for all ages
            and skill levels. Our three pathways, Explore, Ignite, and Focus, help
            dancers sort themselves into classes based on their personal dance
            ambitions, goals, and experience. Click the links below to learn
            more about each pathway.
          </h3>
          <div className='pathways-container'>
            <Pathway 
              title="Focus"
              blurb="Conditioning and fitness programs for dancers and adults."
              icon={<RiFocus3Line className='pathway-icon'/>}
              link="/classtables-focus"
            />
            <Pathway 
              title="Ignite"
              blurb="Skill-based intensive dance training in specific genres."
              icon={<AiOutlineFire className='pathway-icon'/>}
              link="/classtables-ignite"
            />
            <Pathway 
              title="Explore"
              blurb="Dance classes in a peer-grouped, open-level style of program."
              icon={<AiOutlineCompass className='pathway-icon'/>}
              link="/classtables-explore"
            />
          </div>
        </div>
        <div className='container' id='schedules'>
          <h1>Schedules & Sessions</h1>
          <h3>
            The dance year is divided into four sessions, with each session including
            8 weeks of instruction.  Some sessions last a little longer with holidays 
            breaking up the eight weeks. You can sign up for classes, where there
            are openings, any time.  If you join late, no worries! Please contact 
            Mia and your tuition will be prorated.
          </h3>
          <div className='schedules-container'>
            <Pathway 
                title="Daily"
                blurb="Click to view a schedule of all classes, by day of the week."
                icon={<AiOutlineClockCircle className='pathway-icon'/>}
                link="/classtables-daily"
              />
              <Pathway 
                title="Annual"
                blurb="Click to view the schedule for classes, sessions, and holidays in 2022- 2023."
                icon={<GoCalendar className='pathway-icon'/>}
                link="/"
              />
          </div>
        </div>
        <div className='container' id='registration'>
          <h1>Registration</h1>
          <h3>
            Use the links in the table below to register for a class. You will be prompted to create an 
            account if you are new to Synergy Dance. If you already have an account on our parent portal 
            (Jackrabbit Technologies) you should register from that account. If you are interested in a 
            class that has a waitlist, please add your name to the waitlist and drop Mia an email. We are still 
            working to add extra classes where there are waitlists but we need to know who is interested.
          </h3>
          <div className="registration-button-container">
            <div className='buttons'>
              <Link to="/classtables">View All Classes</Link>
              <a href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=538745" target="_blank" rel="noreferrer">Visit Parent Portal</a>
            </div>
          </div>
        </div>
      </div>
      <div className='classes-descriptions container' id="descriptions">
        <h1>Class Descriptions</h1>
        {ClassDescriptionItems.map((descriptionItem, index) => {
          return (
            <ClassDescription descriptionItem={descriptionItem} key={index} />
          );
        })}
      </div>
    </>
  )
}

export default Classes;