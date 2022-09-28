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
import AlexBacheller from '../Images/Staff/alex-bacheller.jpg';
import AmandaBiggs from '../Images/Staff/amanda-biggs.jpg';
import AprilFoster from '../Images/Staff/april-foster.jpg';
import BreaMcBride from '../Images/Staff/brea-mcbride.jpg';
import ChristanaDavis from '../Images/Staff/christana-davis.jpg';
import EmilyBrace from '../Images/Staff/emily-brace.jpg';
import EmmaMontgomery from '../Images/Staff/emma-montgomery.jpg';
import JacquelineFeiss from '../Images/Staff/jacqueline-feiss.jpg';
import MiaGroff from '../Images/Staff/mia-groff.jpg';
import RoseBedard from '../Images/Staff/rose-bedard.jpg';
import TannerPaffen from '../Images/Staff/tanner-paffen.jpg';
import TheresaRobinson from '../Images/Staff/theresa-robinson.jpg';

import SummerClough from '../Images/Staff/summer-clough.jpg';

import RebeccaClough from '../Images/Staff/rebecca-clough.jpg';

import NoPicGirl from '../Images/Staff/no-teacher-pic-girl.jpg';
import NoPicBoy from '../Images/Staff/no-teacher-pic-boy.jpg';

//TeacherBioItems array - add new teahcers as objects here
export const TeacherBioItems = [
    {
        name: "Mia Groff",
        picture: <img src={MiaGroff} alt="Mia Groff" />,
        bio: "Mia has held a life long passion for dance and brings both her enthusiasm and experience to each and every class. She is the owner of Synergy Dance and the founder of the Vermont Youth Dancers.     She has been providing dance instruction in the Jericho area for over 10 years and is the founder of the Vermont Youth Dancers, a not-for-profit organization with roughly 45 members who rehearse and produce an annual dance performance.       Mia has been a dancer her entire life and has received training from highly skilled and respected instructors herself. It has been said that one can only teach to the level which they were taught. In this respect Mia has been the recipient of outstanding dance instruction. This includes over seven years at the Westchester Ballet Company and the Enid Knapp Botsford School of Ballet in Rochester NY as well as four years dancing in college. While at Botsford, Mia received several years of training and coaching from Luba Gulyaeva who performed as a featured dancer at the Kirov, coached at the American Ballet Theater, and who, to this day is called upon by Mikhail Baryshnikov to help coach and train his dancers. Mia brings the rich experiences she has gained from years of training and performing to every class she teaches."
    },
    {
        name: "Alex Bacheller",
        picture: <img src={AlexBacheller} alt="Alex Bacheller" />,
        bio: "Alex grew up dancing in her mother’s studio, Kerry’s Dance Center, in southern New Hampshire. She received training in ballet, tap, jazz, and hip hop. She studied both the Vaganova and Cecchetti ballet methods. Alex danced competitively through high school where she attended New Englands with her dance team. She attended workshops at Plymouth State University to study Graham modern dance and hip hop styles. In college, Alex was accepted as a member of Orchesis Dance Company, where she acted as president her junior year. During her time at UVM, she taught dance at area studios including Electric Youth and The Movement Center. After completing her degree in middle level education, Alex began teaching middle school language arts and social studies. Outside of her day job, she founded an adult dance company in Burlington called Nova Contemporary Dance Company. She’s settled in at Camels Hump Middle School as a 7th and 8th grade teacher. She’s so happy to have found a dance home at Synergy! Alex is looking forward to another year of dance in the beautiful new space."
    },
    {
        name: "Amanda Biggs",
        picture: <img src={AmandaBiggs} alt="Amanda Biggs" />,
        bio: "Amanda grew up in Maryland, and started dancing, competing, and performing when she was 4. She fell in love with performing as a child, and earned her first degree in Theatre Arts with a concentration in Dance. Amanda danced professionally for a modern dance company in Washington D.C., and started teaching jazz and creative movement before moving to Vermont. Amanda now holds an additional Bachelor’s Degree in Elementary Education and has been teaching dance for 19 years to students of all ages. As an experienced teacher, accomplished dancer, and now, mother of two young children, she loves sharing the joy of dance by offering Creative Movement, Jazz, and Hip Hop to the youngest dancers in our community."
    },
    {
        name: "April Foster",
        picture: <img src={AprilFoster} alt="April Foster" />,
        bio: "April is originally from Pittsburgh and has a lifelong love of dance. She studied dance as a dance major at the University of Cincinnati College-Conservatory of Music and in the pre-professional programs at Nutmeg Ballet Conservatory and the Conservatory of Performing Arts at Point Park University. She has extensive training in ballet, including performing soloist and principal roles in both classical ballets and contemporary dance pieces. Due to injury, she decided to change her path to psychology. She holds a MS in Psychology in Education and is a certified Progressing Ballet Technique (PBT) instructor. She draws on her dance experience, psychology background, and PBT training to lead classes that focus on building proper technique, strength, and artistry."
    },
    {
        name: "Brea McBride",
        picture: <img src={BreaMcBride} alt="Brea McBride" />,
        bio: "Brea McBride is the proud owner and Artistic Director of Infinity Dance Studio in Essex Junction, VT.  She credits much of her success in opening the business to the completion of the Start-Up Course offered through the Women's Small Business Program.  Brea began her pre-professional training in her hometown of Ironton, Ohio at Yvonne Dekay’s School of Dance.  She has also lived and furthered her dance education in New Orleans, San Francisco, and New York City.  After graduating from the American Musical and Dramatic Academy in NYC, she was hired as a Mainstage Performer for Disney Cruise Lines.  Brea began her career as a dance educator at The Cynthia King Dance Studio in Brooklyn, NY.  She has taught and choreographed for several local VT studios since moving here in 2004.  Proud moments include restaging a children’s play for the Shelburne Players, choreographing a piece for the Haunted Forest, and working with the children at Camp Dream and Camp Kiniya.  Her most recent professional experience as a principal dancer in Ballet Vermont’s production of Bees and Friends was incredibly rewarding.  Brea is thrilled to have the opportunity to join the Synergy faculty!"
    },
    {
        name: "Christiana Davis",
        picture: <img src={ChristanaDavis} alt="Christiana Davis" />,
        bio: ""
    },
    {
        name: "Emily Brace",
        picture: <img src={EmilyBrace} alt="Emily Brace" />,
        bio: "Emily is a twin girl mama, preschool teacher, plant eater, headstand enthusiast, and has been dancing for nearly 25 years. Emily has choreographed for the Johnson State College Dance Ensemble, performed in two large productions with the Vermont Dance Collective, danced a season as a soloist with the VanDenCross Dance Company, and taught at the Birds Nest for four years. She is excited to dance with you!"
    },
    {
        name: "Emma Montgomery",
        picture: <img src={EmmaMontgomery} alt="Emma Montgomery" />,
        bio: ""
    },
    {
        name: "Jacqueline Feiss",
        picture: <img src={JacquelineFeiss} alt="Jacqueline Feiss" />,
        bio: "Jacqueline grew up in Connecticut and has been dancing since before she could walk. She attended Roger Williams University and obtained a degree in Dance Performance. Jacqueline performed with a variety of different dance companies and studied under many of the influential dancers of today. Jacqueline has been teaching Jazz, Tap, Modern, Contemporary, Ballet, Jazz Fusion/Funk, and Hip Hop for the past twenty years and cannot imagine her life without dance! She lives in Jericho with her husband, two young daughters, and her dog. During the day, Jacqueline works as an Educational Consultant for the Vermont I-Team and helps to support full membership and inclusion for all children. When she is not dancing or consulting, she enjoys skiing, biking, and exploring all Vermont has to offer. She is looking forward to teaching Lyrical 3 at Synergy this year."
    },
    {
        name: "Rose Bedard",
        picture: <img src={RoseBedard} alt="Rose Bedard" />,
        bio: ""
    },
    {
        name: "Tanner Paffen",
        picture: <img src={TannerPaffen} alt="Tanner Paffen" />,
        bio: ""
    },
    {
        name: "Theresa Robinson",
        picture: <img src={TheresaRobinson} alt="Theresa Robinson" />,
        bio: "Theresa grew up in southern CT in a theatre family, acting, directing children’s theatre, assisting with costumes, immersing herself in all aspects of community theatre, and ALWAYS dancing along with her sisters.  She danced at Lyndon State College, running their dance club program there while majoring in Elementary Education.  She has also danced in our local community both in Burlington area and Jericho for many years. Holding a K-6 teaching certificate, Theresa ran her own preschool for more than 20 years and now is an Administrative Assistant at Browns River Middle School, just across the lawn!  Theresa has worked with children of all ages in our local community with Mia as Co-Director of Vermont Youth Dancers since 2010, and taught classes both at the Birds Nest and at Synergy.  Presently, she is teaching Creative Movement, Jazz 1 & 2, and Lyrical 2."
    }
]

//TABioItems array - add new Teaching Assistants as objects here
export const TABioItems = [
    {
        name: "Audrey Rodgers, Nadia Muller, Otto MableyWard",
        picture: <img src={NoPicGirl} alt="Student 1" />,
        bio: ""
    }
]

//StudentTeacherBioItems array - add new Teaching Assistants as objects here
export const StudentTeacherBioItems = [
    {
        name: "Aleacia Daigle",
        picture: <img src={NoPicGirl} alt="Aleacia Daigle" />,
        bio: ""
    },
    {
        name: "Ella Davis",
        picture: <img src={NoPicGirl} alt="Ella Davis" />,
        bio: ""
    },
    {
        name: "Ella Lavoie",
        picture: <img src={NoPicGirl} alt="Ella Lavoie" />,
        bio: ""
    },
    {
        name: "Gabby Cowan",
        picture: <img src={NoPicGirl} alt="Gabby Cowan" />,
        bio: ""
    },
    {
        name: "Jada Bean",
        picture: <img src={NoPicGirl} alt="Jada Bean" />,
        bio: ""
    },
    {
        name: "Naia Surks",
        picture: <img src={NoPicGirl} alt="Naia Surks" />,
        bio: ""
    },
    {
        name: "Pilar Medina",
        picture: <img src={NoPicGirl} alt="Pilar Medina" />,
        bio: ""
    },
    {
        name: "Rosalie Kosnitsky",
        picture: <img src={NoPicGirl} alt="Rosalie Kosnitsky" />,
        bio: ""
    },
    {
        name: "Summer Clough",
        picture: <img src={SummerClough} alt="Summer Clough" />,
        bio: ""
    },
    {
        name: "Taylor Gernander",
        picture: <img src={NoPicGirl} alt="Taylor Gernander" />,
        bio: ""
    },
    {
        name: "Zoe Papaseraphim",
        picture: <img src={NoPicGirl} alt="Zoe Papaseraphim" />,
        bio: ""
    }
]

//AdminBioItems array - add new Administrative Assistants as objects here
export const AdminBioItems = [
    {
        name: "Anika Romanko, Anya Muller, Mia Cannizzaro, Pilar Medina",
        picture: <img src={NoPicGirl} alt="Student 1" />,
        bio: ""
    }
]