import React from 'react'

//CSS Imports
import '../../Styles/Programs.css'

//Images
import StudentTeacher from '../../Images/studentteacher.JPG'

/**
 * Main element for the "STEP" page.
 */
const Step = () => {
  return (
    <div className="program container">
      <h1>S.T.E.P.</h1>
      <h2>Student Teacher Excellence Program</h2>

      <div className="program-blurb">
        <div className="img-and-next-button">
          <img src={StudentTeacher} alt="Student Teacher Excellence" className="about-img" />
        </div>
        <p>
          STEP stands for Student Teacher Excellence Program. Synergy initiated
          this program in 2019 as a way to formalize our student teaching
          experience to ensure both a quality experience for dancers who are
          taking classes from student teachers and to enhance the overall
          experience for our student teachers as well. We believe our student
          teachers bring great joy and creativity to their classrooms, connect
          well and are relatable for young dancers who look up to them. On the
          other hand, teaching dance requires a great deal of training and
          knowledge in order to ensure quality. By working through our teaching
          program and working in conjunction with our professional teachers who
          have agreed to mentor them, we believe we have created an excellent
          opportunity for all to learn and grow. Students in our teacher program
          work through various stages of training in preparation to teach a
          class of their own. Students in phase 1 are required to complete 25
          hours of observation in Synergy classes and submit a written summary
          of what they learned in each observation. Once observation hours are
          complete, students are placed in classes with our professional
          teachers who provide mentorship and guide the student teacher through
          practicing each aspect of teaching class from leading warm up,
          planning and teaching skills or across the floor exercises, creating
          and teaching combinations and choreography, assisting with classroom
          management. Teaching assistants usually complete at least one full
          year assisting in a classroom. Once the student teacher demonstrates
          the ability to lead a full class, their mentor teach can recommend
          them to have a class of their own. When appropriate classes are
          available students in the program might be assigned a class of their
          own and are then paid for their work in that class. Students teachers
          generally start with 100% supervision by their mentor teacher in their
          first year of teaching their own class. As years progress mentor
          teachers continue to assist with skill development, helping student
          teachers understand and develop their planning, goal setting and
          teaching skills. Mentorship is provided throughout all the student
          teacher's years of teaching for Synergy.
        </p>
      </div>
    </div>
  );
}

export default Step