/**
 * TeacherBioItems usage guide:
 *      1. Import an image of the teacher to 'src/Images/Teachers/' and name it after the teacher
 *      2. Add an "import" statement to this file matching the other import statements
 *      3. Add an item to the "TeacherBioItems" array in the following format:
 *         {
 *              name: "TEACHER_NAME",
 *              picture: <img src={IMPORTED_TEACHER_IMAGE} alt="TEACHER_NAME" />
 *              bio: "TEACHER_BIO"
 *         }
 *      4. Save this file and check that your teacher has been added to the Teacher Bios section of the website!
 */

//Images - add your import statement here
import AmandaBiggs from '../Images/Teachers/amanda-biggs.jpg'
import EmilyBrace from '../Images/Teachers/emily-brace.jpg'

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
    }
]