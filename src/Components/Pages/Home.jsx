//React Imports
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Papa from "papaparse";

//Icons and Images
import { AiOutlineInfoCircle } from 'react-icons/ai'
import OutdoorRecital from '../../Images/outdoor-recital.jpg'
import RecitalPose from '../../Images/recital-pose.jpg'
import DanceClass from '../../Images/studio-a-class.jpg'
import StudioFront from '../../Images/studio-front.jpg'

//CSS
import '../../Styles/Home.css'

/**
 * Renders a banner with 
 * @param {title} large text
 * @param {blurb} small text
 * @param {btnLink} where the button leads, as a string
 * @param {btnText} text on the button
 * @param {image} image to be displayed, as a url
 * @param {reverse} true = image on right, false = image on left
 * @returns 
 */
const HomeBanner = ({ title, blurb, btnLink, btnText, image, reverse }) => {
  return (
    <div className={`home-banner ${reverse ? 'reverse' : ''}`}>
        <div className='home-banner-content'>
            <img src={image} alt={title} />
            <div className='banner-info'>
                <h1>{title}</h1>
                <p>{blurb}</p>
                <Link to={btnLink}>{btnText}</Link>
            </div>
        </div>
    </div>
  )
}

/**
 * Main element for the Home page.
 */
const Home = () => {
  
  // State for loading data from google sheets.
  const [googleSheetData, setGoogleSheetData] = useState({});
  
  // This useEffect hook fetches the data from google sheets on page load.
  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQvCf3uHNT26Wb9ApDfYVSPbUIBsX7fjqejut1LCRptL8TET9DDmPElpL9IsJgosqT1aMUscfVIrzjC/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: function(results) {
        setGoogleSheetData(results.data);
      }
    // BLOCK THIS ERROR SO THAT ABOVE USEEFFECT ONLY RUNS ONCE
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })}, [])

  // splitting the google sheet data into individual items that can be used to render various dynamic messages.
  const mini_alert = googleSheetData[0];
  const mia_message = googleSheetData[1];

  return (
    <>
      <div className='bg'></div>
      <div className={`home-alert-container ${mini_alert ? '' : 'hide'}`}>
        <div className='home-alert'>
          <div className='icon-and-header'>
            <AiOutlineInfoCircle className='home-alert-icon'/>
            <h1>{mini_alert ? mini_alert.CONTENT_A : "This Week at Synergy!"}</h1>
          </div>
            <p>{mini_alert ? mini_alert.CONTENT_B : "We're having trouble loading this information. Please check back later!"}</p>
        </div>
      </div>
      <div className='container'>
        <div className='home-title'>
          <p>welcome to</p>
          <h1>Synergy</h1>
          <h2>Center for Dance and the<br></br>Performing Arts</h2>
        </div>
      </div>
      <div className={`home-mia-message container ${mia_message ? '' : 'hide'}`}>
        <h1>{mia_message ? mia_message.CONTENT_A : 'Welcome to Synergy Dance!'}</h1>
        <h3>{mia_message ? mia_message.CONTENT_B : ''}</h3>
        <p>{mia_message ? mia_message.CONTENT_C : 'Please enjoy exploring our website!'}</p>
        <h2>-Mia</h2>
      </div> 
      <div className='home-banners'>
        <HomeBanner
          title="Dance Classes"
          blurb="Synergy offers age-based and skill-based progressions through classes in Ballet, Lyrical, Contemporary, Hip Hop, and now Jazz!"
          btnText="View Schedule and Register!"
          btnLink="/classes"
          image={DanceClass}
          reverse={true}
        />
        <HomeBanner
          title="Events"
          blurb="Look here for extra opportunities to dance. Pop-ups, masterclasses, summer camps, or special alumni events like Open House and Holly-DAZE throughout the year!"
          btnText="More info"
          btnLink="/events"
          image={OutdoorRecital}
          reverse={false}
        />
        <HomeBanner
          title="Programs"
          blurb='We continue look for new ways to build our dancers and future leaders through opportunities like SPARC (our repertory company), STEP (our student teacher training program), and our student ambassador initiative.'
          btnText="Get involved!"
          btnLink="/programs"
          image={RecitalPose}
          reverse={true}
        />
        <HomeBanner
          title="Facilities"
          blurb='Our brand-new building features a climate controlled environment with large welcoming waiting spaces, 4 studios, and sprung Marley floors.'
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