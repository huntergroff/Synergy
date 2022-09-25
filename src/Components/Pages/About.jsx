//React Imports
import React, { useRef } from 'react'

//Icons and Images
import StudioFront from '../../Images/studio-front.jpg'
import StudioElev from '../../Images/studio-elev.jpg'
import StudioOblique from '../../Images/studio-oblique.jpg'
import StudioWide from '../../Images/studio-wide.jpg'
import StudioAElev from '../../Images/studio-a-elev.jpg'
import StudioARail from '../../Images/studio-a-railing.jpg'
import StudioASilks from '../../Images/studio-a-silks.jpg'
import StudioD from '../../Images/studio-d-elev.jpg'
import StudioC from '../../Images/studio-c-elev.jpg'
import StudioLobby from '../../Images/studio-lobby-party.jpg'
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
 * Renders one modular portion of the about section.
 * @param refName = the name of the ref for this portion.
 * @param title = the name of the section
 * @param text the text to be displayed
 * @param image the image to be displayed
 * @param imageAlt the alt text for the image
 * @param nextButtonText the text for the next button (oprtional)
 * @param nextButtonLink the ref scroll function to move to the next ref (optional)
 * @param alignment "left" or "right" whether this about section is left or right aligned
* @returns 
 */
const AboutSection = ({refName, title, text, image, imageAlt, nextButtonText, nextButtonLink, alignment}) => {
  return (
    <div className={`about-section ${alignment}`}  ref={refName}>
      <div className='img-and-next-button'>
        <img src={image} alt={imageAlt} className='about-img' />
        <h1 className='about-section-title'>{title}</h1>
        {nextButtonText && nextButtonLink ? 
          <div className='next-button' onClick={nextButtonLink}>
            <h2 className='next-button-text'>{nextButtonText}</h2>
            <HiArrowDown className='next-button-icon' />
          </div>
        : <></>}
      </div>
      {text}
    </div>
  )
}


/**
 * Renders the modular portion the "About" section
 */
const AboutOurComminty = () => {
  //refs for smooth scrolling buttons to all sections
  const ourStoryRef = useRef(null)
  const ourStoryScroll = () => ourStoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const ourCommunityRef = useRef(null)
  const ourCommunityScroll = () => ourCommunityRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const danceForLifeRef = useRef(null)
  const danceForLifeScroll = () => danceForLifeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const ourAlumniRef = useRef(null)
  const ourAlumniScroll = () => ourAlumniRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const actionOrientedRef = useRef(null)
  const actionOrientedScroll = () => actionOrientedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })


  return (
    <div id="AboutOurCommunity">
      <div className='about-title-and-blurb'>
        <h1>About Us</h1>
        <p>
          Synergy Dance provides a family oriented, collaborative dance studio focusing on dance excellence with an emphasis on establishing 
          healthy dance habits, comprehensive and high quality training, and artistic expression. 
          Synergy is family owned and operated.
        </p>
        <div className='next-button' onClick={ourStoryScroll}>
          <h2 className='next-button-text'>Our Story</h2>
          <HiArrowDown className='next-button-icon' />
        </div>
      </div>
      <AboutSection 
        refName={ourStoryRef}
        title="Our Story"
        text={<p>Synergy Center for Dance and the Performing Arts was founded in 2017. Synergy grew out of
        a desire to provide high quality dance instruction in a student centered, community oriented
        studio that encourages hard work, creativity and life long passion for the arts. We purchased
        our land in 2018 and began building our dream studio right here on the campus with
        Chittenden East School district and Browns River Middle School where kids can easily get to
        classes. Our studio construction was complete and we opened our doors in September of
        2019. The pandemic shut us down but only for a moment We chose to be solution oriented
        and by June of 2020, we were re-organized to meet the demands of COVID restrictions and we
        reopened with a full summer of camps and a full season of dance classes in 2020/2021. We
        even completed 2 years worth of outdoor recitals. Our students and staff never gave up. After
        2 years of constant re-engineering to meet the ever changing demands of the pandemic,we are
        standing strong and ready to hit the ground running toward the future.</p>}
        image={StudioNight}
        imageAlt="Synergy Outdoor Recital, 2020"
        nextButtonText="Our Community"
        nextButtonLink={ourCommunityScroll}
        alignment="left"
      />
      <AboutSection 
        refName={ourCommunityRef}
        title="Our Community"
        text={<p>Our students come to our studio with varied goals. Many are busy student athletes, musicians,
        theatre lovers and more. Some are adults who want to try dance for the first time. Neither
        group has a ton of free time! Our EXPLORE programs are designed for them with age based
        recreational classes. On the other hand, some students want to dedicate their whole self to
        the dance, studying many genres and progressing through our IGNITE syllabus based
        program, performing in our dance company or working through our student teacher program.
        For them, the IGNITE program focuses on an intensive skill based progression. Regardless of
        the program, Synergy's students are united by their love of dance and all are welcome here.
        Synergy's teachers are lifelong dancers themselves. Whether they grew out of our student
        teaching program or come from other studios, Synergy teachers are passionate about building
        strong dancers and well rounded people. They love the Jericho/Underhill community because
        they live here, they work here, their kids go to school here. They are our greatest asset and
        they will love and guide your children.</p>}
        image={BarKids}
        imageAlt="Hanging out at Synergy!"
        nextButtonText="Dance For Life"
        nextButtonLink={danceForLifeScroll}
        alignment="right"
      />
      <AboutSection 
        refName={danceForLifeRef}
        title="Dance For Life"
        text={<p>Our programming encourages a “dance for life” paradigm. We want our dancers to be active
        and engaged in all kinds of performing arts. We hope our students leave Synergy with
        longstanding love of dance whether they plan to be life long dancers, performing artists or
        passionate audience members. Our unique programming encourages students to
        choreograph and create, to lead, to teach and to share their unique gifts.
        <br/><br/>
        In order to be life-long dancers, we want to encourage healthy habits that promote care of self
        both physically and mentally. Our teaching staff are known for researching the best ways to
        encourage healthy dance habits, grounded in current research and shaped into best practices.
        Our relationship with local fitness programs and physical therapists help to ensure we are
        looking out for your child at all stages of their development.</p>}
        image={MezzanineKids}
        imageAlt="Dancers in the Studio A Mezzanine."
        nextButtonText="Our Alumni"
        nextButtonLink={ourAlumniScroll}
        alignment="left"
      />
      <AboutSection 
        refName={ourAlumniRef}
        title="Our Alumni"
        text={<p>The outcome of Synergy's work in developing passionate dancers and community oriented people 
          is demonstrated by our alumni. They love to pay it forward and they don't quickly forget the community
          that helped raise them. That is why you often see our alumni back in the studio during their vacations 
          or breaks teaching classes, choreographing for our companies or participating in our Holly-DAZE alumni 
          teaching event. Our former students are out in the world continuing to explore their love of dance and 
          they come home from LA, NYC, Boston and beyond to help pass on what they are learning to help grow a 
          new generation of Synergy dancers.</p>}
        image={HollydazeAlumni}
        imageAlt="Our alumni at Holly-daze, 2019"
        nextButtonText="Action Oriented Community"
        nextButtonLink={actionOrientedScroll}
        alignment="right"
      />
      <AboutSection 
        refName={actionOrientedRef}
        title="Action-Oriented Community"
        text={<p>We are an active goal oriented community and our love of VERBS shows that we are action oriented! 
          Whether you want to FOCUS on fitness or IGNITE your dance journey or EXPLORE new styles, we hope Synergy 
          has a program for you. And as our 4 studio names reflect, we hope you find a home at Synergy…a place to 
          ASPIRE, BELIEVE, CREATE and DREAM!</p>}
        image={LilyTeaching}
        imageAlt="Synergy Ballet Intensive"
        alignment="left"
      />
    </div>
  )
}

/**
 * Renders "facilities" section
 */
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
          Synergy Center for Dance is a new 6,000+ square foot studio conveniently located near 
          Browns River Middle School on River Road in Jericho. With access to the nearby schools, 
          the market, the library and Mills River Park, Synergy makes it easy for young families to 
          coordinate dance with many other activities. The space is thoughtfully designed with ample 
          waiting spaces and large windows, which allow us to enjoy our beautiful surroundings year round.
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
          Synergy's four climate studios all contain sprung floors for the protection 
          of young developing bodies. 3 studios contain professional grade Marley dance floors, 
          and 1 a hardwood flooring. Studios contain mirrors, ballet barres, televisions and 
          cameras allow for remote learning or for use as teaching tools.  Our largest studio 
          includes a mezzanine which allows parents, teachers and guests to easily view classes and performances.
        </p>
      </div>
    </div>
  )
}

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
  )
}

/**
 * Main element for the about page.
 */
const About = () => {
  return (
    <div className='about'>
      <AboutOurComminty />
      <Facilities />
      <Teachers />
    </div>
  )
}

export default About