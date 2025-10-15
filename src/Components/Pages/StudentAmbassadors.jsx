import React from 'react'

//Images
import AssistantTeachers from '../../Images/assistant-teachers.jpg'

/**
 * Main element for the "Student Ambassadors" page.
 */
const StudentAmbassadors = () => {
  return (
    <div className="program container">
      <h1>Student Ambassador Program</h1>
      <div className="program-blurb">
        <div className="img-and-next-button">
          <img src={AssistantTeachers} alt="Assistant Teachers" className="about-img" />
        </div>
        <p>
          Our Student Ambassadors are tasked with building a strong community.
          Whether it is welcoming new students, hosting a community wide event,
          helping with recital or creating games like “Name our New GNOME” or
          holiday contests, our students ambassadors are working to help Synergy
          be a vibrant, fun and creative community where everyone feels at home!{" "}
        </p>
      </div>
    </div>
  );
}

export default StudentAmbassadors