import React from 'react'
import '../../Styles/Home.css'
import HomeBanner from '../HomeBanner'
import Dancer from '../../Images/dancer.jpg'
import DanceClass from '../../Images/danceclass.jpg'
import StudioFront from '../../Images/studio-front.jpg'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='bg'></div>
      <div className='container'>
        <div className='home-title'>
          <p>welcome to</p>
          <h1>Synergy</h1>
          <h2>Center for Dance and the<br></br>Performing Arts</h2>
        </div>
      </div>
      <div className='home-alert-container'>
        <div className='home-alert'>
            <AiOutlineInfoCircle className='home-alert-icon'/>
            <h1>This week at Synergy!</h1>
            <p>
              Pop-up hip hop classes with Amy, Owen, and Hunter, on Wednesday, August 29!
              See "Events: Pop-ups and Masterclasses" for more details. 
            </p>
        </div>
      </div>
      <div className='home-mia-message container'>
        <h1>Welcome to our new website!</h1>
        <h3>July 19 - July 26</h3>
        <p>Welcome to our new website! We have been working on this website for a long time and it's super good, right? Right? Please like it. I really hope you like the website because i spend a lot of time on it and I really want people to like it and think it's good! I want you to like it! Ahhhhhh!</p>
        <h2>-Mia</h2>
      </div> 
      <div className='home-banners'>
        <HomeBanner
          title="Dance Classes"
          blurb={<span>Hip Hop, Aerial, Ballet, and more, <br></br> for ages 3 to adult</span>}
          btnText="View Schedule and Register!"
          btnLink="/classes"
          image={Dancer}
          reverse={true}
        />
        <HomeBanner
          title="Events"
          blurb="Summer camps, masterclasses, and performances throughout the year!"
          btnText="More info"
          btnLink="/events"
          image={DanceClass}
          reverse={false}
        />
        <HomeBanner
          title="Programs"
          blurb='SPARC repertory company, "STEP", and student ambassadors.'
          btnText="Get involved!"
          btnLink="/programs"
          image={DanceClass}
          reverse={true}
        />
        <HomeBanner
          title="Facilities"
          blurb='Our brand-new building features 4 studios and sprung Marley floors.'
          btnText="See more!"
          btnLink="/about#facilities"
          image={StudioFront}
          reverse={false}
        />
      </div>
      <div className='home-bottom'>
        <p>Join the<br></br>Synergy Family!</p>
      </div>
    </>
  )
}

export default Home;