import React from 'react'
import { AiOutlineCompass, AiOutlineFire, AiOutlineClockCircle } from 'react-icons/ai';
import { RiFocus3Line } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go'
import Pathway from '../Pathway';
import '../../Styles/Classes.css'

const Classes = () => {
  return (
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
            title="Explore"
            blurb="Dance classes in a peer-grouped, open-level style of program."
            icon={<AiOutlineCompass className='pathway-icon'/>}
            link="/"
          />
          <Pathway 
            title="Ignite"
            blurb="Dance classes for students pursuing intensive training in specific genres."
            icon={<AiOutlineFire className='pathway-icon'/>}
            link="/"
          />
          <Pathway 
            title="Focus"
            blurb="Fitness classes for adults who enjoy guided movement and rythm."
            icon={<RiFocus3Line className='pathway-icon'/>}
            link="/"
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
              title="Daily Schedule"
              blurb="Click to view a schedule of all classes, by day of the week."
              icon={<AiOutlineClockCircle className='pathway-icon'/>}
              link="/classtables"
            />
            <Pathway 
              title="Annual Schedule"
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
        <div class="registration-button-container">
          <a href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=538745" target="_blank">Visit Parent Portal</a>
          <button>View Class Descriptions</button>
        </div>
      </div>
    </div>
  )
}

export default Classes;