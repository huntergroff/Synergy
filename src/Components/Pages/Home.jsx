import React from 'react'
import '../../Styles/Home.css'
import HomeBanner from '../HomeBanner';
import Dancer from '../../Images/dancer.jpg'

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
      <div className='home-mia-message container'>
        <h1>Welcome to our new website!</h1>
        <h3>July 19 - July 26</h3>
        <p>Welcome to our new website! We have been working on this website for a long time and it's super good, right? Right? Please like it. I really hope you like the website because i spend a lot of time on it and I really want people to like it and think it's good! I want you to like it! Ahhhhhh!</p>
        <h2>-Mia</h2>
      </div> 
      <div className='home-banners'>
        <HomeBanner
          title="Dance Classes"
          blurb="Hip Hop, Aerial, Ballet, and more, for ages 3 to adult"
          btnText="View Schedule and Register!"
          btnLink="/classes"
          image={Dancer}
          reverse={true}
        />
      </div>
      <div className='home-bottom'>
        <p>Join the Synergy Family!</p>
      </div>
    </>
  )
}

export default Home;