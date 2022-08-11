//React Imports
import React from 'react'

//Icons and Images
import StudioFront from '../../Images/studio-front.jpg'
import StudioElev from '../../Images/studio-elev.jpg'
import StudioOblique from '../../Images/studio-oblique.jpg'
import StudioWide from '../../Images/studio-wide.webp'
import StudioAElev from '../../Images/studio-a-elev.jpg'
import StudioARail from '../../Images/studio-a-railing.jpg'
import StudioASilks from '../../Images/studio-a-silks.jpg'
import StudioD from '../../Images/studio-d-elev.jpg'
import StudioC from '../../Images/studio-c-elev.jpg'
import StudioLobby from '../../Images/studio-lobby-party.jpg'

//CSS
import '../../Styles/About.css'


const Facilities = () => {
  return (
    <div id="facilities">
      <div className='title'>
        <h1>Facilities</h1>
        <h2>16 River Road, Jericho, VT</h2>
      </div>
      <div className='photos-1'>
        <div className='photos-1-1'>
          <img src={StudioFront} alt="Synergy Dance studio facade"></img>
        </div>
        <div className='photos-1-2'>
          <img src={StudioElev} alt="Synergy Dance studio elevation"></img>
          <img src={StudioOblique} alt="Synergy Dance studio oblique view"></img>
        </div>
      </div>
      <div className='photos-2'>
        <img src={StudioWide} alt="Synergy Dance studio view from afar"></img>
      </div>
      <div className='text-1'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='photos-3'>
        <div className='photos-3-1'>
          <img src={StudioAElev} alt="The staircase and mezzanine in Studio A"></img>
        </div>
        <div className='photos-3-2'>
          <img src={StudioASilks} alt="Hanging silks in Studio A"></img>
          <img src={StudioARail} alt="The mezzanine railing in Studio A"></img>
        </div>
      </div>
      <div className='photos-4'>
        <div className='photos-4-2'>
          <img src={StudioC} alt="The windows in Studio C"></img>
          <img src={StudioD} alt="The windows in Studio D"></img>
        </div>
        <div className='photos-4-1'>
          <img src={StudioLobby} alt="Mia and Rob celebrate the opening of the studio"></img>
        </div>
      </div>
      <div className='text-2'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

const Teachers = () => {
  
}

const About = () => {
  return (
    <div className='about'>
      <Facilities />
    </div>
  )
}

export default About