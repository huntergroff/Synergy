/**
 * StaffBioItems usage guide:
 *      1. Import an image of the faculty member to 'src/Images/Staff/' and name it after the person
 *      2. Add an "import" statement to this file matching the other import statements
 *      3. Select the array that you would like to add to -- TeacherBioItems, TABioItems, StudentTeacherBioItems, AdminBioItems
 *      3. Add an item to the array in the following format:
 *         {
 *              name: "STAFF_MEMBER_NAME",
 *              picture: <img src={IMPORTED_STAFF_IMAGE} alt="STAFF_MEMBER_NAME" />
 *              bio: "STAFF_MEMBER_BIO"
 *         }
 *      4. Save this file and check that your teacher has been added to the Teacher Bios section of the website!
 */

//Images - add your import statement here
import React from 'react';
import AmandaBiggs from '../Images/Staff/amanda-biggs.jpg';
import EmilyBrace from '../Images/Staff/emily-brace.jpg';
import NoPicGirl from '../Images/Staff/no-teacher-pic-girl.jpg';

//TeacherBioItems array - add new teahcers as objects here
export const TeacherBioItems = [
    {
        name: "Amanda Biggs",
        picture: <img src={AmandaBiggs} alt="Amanda Biggs" />,
        bio: "Amanda grew up in Maryland, and started dancing, competing, and performing when she was 4. She fell in love with performing as a child, and earned her first degree in Theatre Arts with a concentration in Dance. Amanda danced professionally for a modern dance company in Washington D.C., and started teaching jazz and creative movement before moving to Vermont. Amanda now holds an additional Bachelor’s Degree in Elementary Education and has been teaching dance for 19 years to students of all ages. As an experienced teacher, accomplished dancer, and now, mother of two young children, she loves sharing the joy of dance by offering Creative Movement, Jazz, and Hip Hop to the youngest dancers in our community."
    },
    {
        name: "Emily Brace",
        picture: <img src={EmilyBrace} alt="Emily Brace" />,
        bio: "Emily is a twin girl mama, preschool teacher, plant eater, headstand enthusiast, and has been dancing for nearly 25 years. Emily has choreographed for the Johnson State College Dance Ensemble, performed in two large productions with the Vermont Dance Collective, danced a season as a soloist with the VanDenCross Dance Company, and taught at the Birds Nest for four years. She is excited to dance with you!"
    },
    {
        name: "Next Teacher",
        picture: <img src={NoPicGirl} alt="To Be Named" />,
        bio: "To Be Named is a really nice person who teaches every type of dance."
    }
]

//TABioItems array - add new Teaching Assistants as objects here
export const TABioItems = [
    {
        name: "Amanda Biggs",
        picture: <img src={AmandaBiggs} alt="Amanda Biggs" />,
        bio: "Amanda grew up in Maryland, and started dancing, competing, and performing when she was 4. She fell in love with performing as a child, and earned her first degree in Theatre Arts with a concentration in Dance. Amanda danced professionally for a modern dance company in Washington D.C., and started teaching jazz and creative movement before moving to Vermont. Amanda now holds an additional Bachelor’s Degree in Elementary Education and has been teaching dance for 19 years to students of all ages. As an experienced teacher, accomplished dancer, and now, mother of two young children, she loves sharing the joy of dance by offering Creative Movement, Jazz, and Hip Hop to the youngest dancers in our community."
    },
    {
        name: "Emily Brace",
        picture: <img src={EmilyBrace} alt="Emily Brace" />,
        bio: "Emily is a twin girl mama, preschool teacher, plant eater, headstand enthusiast, and has been dancing for nearly 25 years. Emily has choreographed for the Johnson State College Dance Ensemble, performed in two large productions with the Vermont Dance Collective, danced a season as a soloist with the VanDenCross Dance Company, and taught at the Birds Nest for four years. She is excited to dance with you!"
    },
    {
        name: "Next Teacher",
        picture: <img src={NoPicGirl} alt="To Be Named" />,
        bio: "To Be Named is a really nice person who teaches every type of dance."
    }
]

//StudentTeacherBioItems array - add new Teaching Assistants as objects here
export const StudentTeacherBioItems = [
    {
        name: "Amanda Biggs",
        picture: <img src={AmandaBiggs} alt="Amanda Biggs" />,
        bio: "Amanda grew up in Maryland, and started dancing, competing, and performing when she was 4. She fell in love with performing as a child, and earned her first degree in Theatre Arts with a concentration in Dance. Amanda danced professionally for a modern dance company in Washington D.C., and started teaching jazz and creative movement before moving to Vermont. Amanda now holds an additional Bachelor’s Degree in Elementary Education and has been teaching dance for 19 years to students of all ages. As an experienced teacher, accomplished dancer, and now, mother of two young children, she loves sharing the joy of dance by offering Creative Movement, Jazz, and Hip Hop to the youngest dancers in our community."
    },
    {
        name: "Emily Brace",
        picture: <img src={EmilyBrace} alt="Emily Brace" />,
        bio: "Emily is a twin girl mama, preschool teacher, plant eater, headstand enthusiast, and has been dancing for nearly 25 years. Emily has choreographed for the Johnson State College Dance Ensemble, performed in two large productions with the Vermont Dance Collective, danced a season as a soloist with the VanDenCross Dance Company, and taught at the Birds Nest for four years. She is excited to dance with you!"
    },
    {
        name: "Next Teacher",
        picture: <img src={NoPicGirl} alt="To Be Named" />,
        bio: "To Be Named is a really nice person who teaches every type of dance."
    }
]

//AdminBioItems array - add new Administrative Assistants as objects here
export const AdminBioItems = [

]