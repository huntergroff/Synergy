/**
 * ClassDescriptionItems usage guide:
 *      1. Import an image for the class category header to 'src/Images/' and name it something simple
 *      2. Add an "import" statement to this file matching the other import statements
 *      3. Add an item to the "ClassDescriptionItems" array in the following format:
 *         {
 *              categoryTitle: "CATEGORY_NAME",
                categoryUrlTag: "CATEGORY_NAME_LOWERCASE_NO_SPACES",
                categoryImg: (<img src={IMPORT_NAME} alt="SHORT_ALT_TEXT"/>),
                categoryBlurb: "BLURB_FOR_CATEGORY",
                classes: [
                    {
                        title: "CLASS_1_TITLE",
                        age: "CLASS_1_AGE",
                        blurb: "CLASS_1_BLURB"
                    },
                    {
                        title: "CLASS_2_TITLE",
                        age: "CLASS_2_AGE",
                        blurb: "CLASS_2_BLURB"
                    },
                    ...
                ]
 *         }
 *      4. Save this file and check that your class category and classes have been added to the Class Descriptions section of the website!
 *      5. Check that the category is now listed in the navbar under Classes -> Class Descriptions
 */

//Images - add your import statement here
import React from 'react';
import Pointe from '../Images/pointe.jpg'

export const ClassDescriptionItems = [
    {
        categoryTitle: "Ballet",
        categoryUrlTag: "ballet",
        categoryImg: (<img src={Pointe} alt="Ballet"/>),
        categoryBlurb: "Need a blurb for ballet!",
        classes: [
            {
                title: "Foundations in Dance-Ballet/Lyrical 1",
                age: "5-7",
                blurb: "For the brand new ballet or lyrical student, this class uses a mixture of games and structured exercises to introduce the fundamentals of ballet necessary for students whether they wish to move on to Ballet 1 or Lyrical 1. This is an excellent class for students who have completed at least one full year of Creative Movement and are ready to participate in a more formal dance class or who anticipate that they would like to participate in the IGNITE programs in the future. Students will be exposed to the rules, etiquette and structure of more formalized dance instruction. Students will have exposure to barre exercises, center exercises and simple conditioning exercises that help them build the strong core, feet and leg muscles necessary to support healthy habits throughout their dance training. Students should expect to study at this level for at least one year."
            },
            {
                title: "Ballet 1",
                age: "7-9",
                blurb: "This class is designed for the young ballet student with previous ballet/dance experience such as Foundations in Dance or Creative Movement While still incorporating some games and play to introduce ballet concepts, this class will continue to introduce the skills necessary for the student to step up to Ballet 2. Students will learn to complete an entire beginner barre, and center exercises. Student should expect to study at this level for 1 to 2 years." 
            },
            {
                title: "Ballet 2",
                age: "8-11",
                blurb: "Ballet 2 represents the true beginning of formalized ballet training. Students in this class will complete exercises at the barre and in center. Students will be introduced to the fundamental exercises in the Progressing Ballet Technique (see class description below) to establish strength in core and leg muscles necessary for safe progression to more complex movement. Students will begin to learn essential ballet terminology and will begin work on expanding their ballet skills for turning, jumping, simple adagio and waltz. Students should expect to study at this level for 1 to 3 years."
            },
            {
                title: "Ballet 3",
                age: "11-14",
                blurb: "This level 3 class is designed for dancers who have achieved the Intermediate Level of ballet proficiency with at least 3 years of ballet or lyrical training. The class presumes a fundamental knowledge of ballet terminology, experience with barre work, and, in center, a working knowledge of the basics of waltz, pirouettes, petit allegro and grand allegro. The class is designed as a fast paced program introducing students to the conditioning, strength and endurance needed to progress to advanced classes. Students at this level may consider additional pre-pointe training if going en pointe is a future goal. Students at this level are welcome to participate in the PBT Jr training program. Students could expect to study at this level for as many as 3 years."
            },
            {
                title: "Ballet 4",
                age: "12 and up",
                blurb: "This advanced level ballet class includes a comprehensive ballet curriculum including a complete barre and full scope of center exercises including adagio, waltz, traveling turns, petit allegro (including the introduction of batterie), and grand allegro. Students are expected to work toward a comprehensive ballet vocabulary and to adopt individual conditioning programs that would assist in maintaining healthy strength and conditioning to meet the increasing demands of this class. Students at this level are welcome to participate in the PBT training program (see class description below). Students at this level may consider formal pointe training."
            },
            {
                title: "Ballet 4/5",
                age: "14 and up",
                blurb: "The ballet 4/5 class is designed to give students in Level 4 or 5 and option for a second ballet class each week. For the most part, students in this class will also be taking either a Ballet 4 or Ballet 5 class each week where they can focus on specific fundamentals of technique and would take Ballet 4/5 as a second class option."
            },
            {
                title: "Ballet 5",
                age: "14 and up",
                blurb: "The ballet 4/5 class is designed to give students in Level 4 or 5 and option for a second ballet class each week. For the most part, students in this class will also be taking either a Ballet 4 or Ballet 5 class each week where they can focus on specific fundamentals of technique and would take Ballet 4/5 as a second class option."
            }
        ]
    },
    {
        categoryTitle: "Progressing Ballet Technique",
        categoryUrlTag: "pbt",
        categoryImg: (<img src={Pointe} alt="PBT"/>),
        categoryBlurb: "Not just for Ballerinas!  **Progressing Ballet Technique is an internationally recognized training program designed to train dancers in body awareness, postural awareness, balance, and core conditioning. The exercises help increase the muscle memory of correct ballet technique through a carefully designed program utilizing balance balls, resistance bands and therapy balls. The program was designed by a professional ballet dancer in conjunction with a team of physical therapists with the goal of improving the health and safety of young developing dancers and to support the establishment of good technique.",
        classes: [
            {
                title: "PBT Jr",
                age: "Instructor Recommendation",
                blurb: "This junior level course begins with establishing an understanding of how to engage one?s deep core muscles for stability and balance and how to utilize muscles of the legs, hips, and glutes to achieve safe and proper turn out. In addition, back and foot strengthening exercises are employed to help students improve their jumps and extensions. Students in Level 3 classes and up may participate in this program. Students in Level 2 classes require instructor permission to participate in PBT Jr. Spaces are limited to 8 dancers."
            },
            {
                title: "PBT",
                age: "Instructor Recommendation",
                blurb: "This extra PBT class is offered for more advanced ballet students who have not yet taken a PBT class and therefore may not be ready for the PBT SR level or students in any genre who wish to take an extra conditioning class each week. Dancers should be in Level 4 or above to take this class. Space is currently limited to 8 dancers."
            },
            {
                title: "PBT Sr",
                age: " ",
                blurb: "PBT SR is intended for the advanced dancer who has a primary understanding of complex ballet movement and body mechanics. Once a student has learned to engage their deep core, back, and leg muscles for alignment and balance, more complex and challenging exercises are added to increase strength and endurance in addition to helping the student understand how to employ these muscles to achieve various movements of advancing difficulty like penche, cambre, retire, arabesque, developpe etc... Students who have completed at least 1 year of PBT or who are in Ballet, Lyrical or Hip Hop Level 4 or 5 may participate in this program. Space is currently limited to 8 dancers."
            }
         ]
    },
    {
        categoryTitle: "Pointe",
        categoryUrlTag: "pointe",
        categoryImg: (<img src={Pointe} alt="Pointe"/>),
        categoryBlurb: "Pointe work requires a serious commitment on the part of each dancer and a good understanding of the care of her body. Safe pointe work is predicated by having the strength and technical skill needed to maintain leg, hip and foot alignment. In order to safely and efficiently progress in this difficult work, students are encouraged to participate in ballet based classes at least 2 times per week in addition to engaging in home practice of strength and conditioning exercises provided. Students are highly encouraged to supplement their ballet training with a strength and conditioning program such as Pilates or Progressing Ballet Technique or other programs designed to enhance core, leg and ankle strength. Younger dancers and/or dancers with a history of injury may be required to have an evaluation by a physical therapist prior to beginning pointe training. Your instructor will discuss this on an individual basis.",
        classes: [
            {
                title: "Pre-Pointe",
                age: "Instructor Recommendation",
                blurb: "This 1/2 hour class engages the student in the foot, and leg exercises needed to progress toward work en pointe and is required of any student interested in being considered for pointe work. This class is useful for all dancers who wish to improve their leg, ankle and foot strength regardless of intention to move toward attaining their pointe shoes."
            },
            {
                title: "Pointe 1",
                age: "Instructor Recommendation",
                blurb: "This class is intended for students who are close to working on pointe or who have recently acquired their pointe shoes. Students will develop an understanding of the dynamics of work en pointe through barre exercises and simple center work with their pointe shoes. The class is designed to help the new pointe student to develop the strength and proper use of their shoes."
            },
            {
                title: "Pointe 2",
                age: "Instructor Recommendation",
                blurb: "For the advancing pointe student, this class will advance to more complex pointe work both at the barre and in center including bearing weight on a single leg, traveling and static turns, and move complex combinations of movement."
            },
            {
                title: "Pointe 3",
                age: "Instructor Recommendation",
                blurb: "This class is designed to challenge students who have more extensive experience en pointe. Students in this class will be working on more complex turns (attitude, foutes, complex travelling turn sequences), advanced movements demanding the ability to utlize releve movements from single leg, sustained balance and advanced epaulment. Students in this class should be taking at least 2 ballet based classes per week and are welcome to dance in both the Pointe 2 and Pointe 3 classes each week to continue improving endurance and strength. Students in this class are strongly encouraged to be engaged weekly in some kind of cross training or strength and conditioning to ensure safety and performance."
            }
        ]
    },
    {
        categoryTitle: "Lyrical",
        categoryUrlTag: "lyrical",
        categoryImg: (<img src={Pointe} alt="Lyrical"/>),
        categoryBlurb: "Lyrical ...",
        classes: [
            {
                title: "Foundations in Dance-Ballet/Lyrical",
                age: "5-7",
                blurb: "For the brand new ballet or lyrical student, this class uses a mixture of games and structured exercises to introduce the fundamentals of ballet necessary for students whether they wish to move on to Ballet 1 or Lyrical 1. Students will have exposure to barre exercises, center exercises and simple conditioning exercises that help them build the strong core, feet and leg muscles necessary to support healthy habits throughout their dance training. Students should expect to study at this level for at least one year."
            },
            {
                title: "Lyrical/Contemp 1",
                age: "7-9",
                blurb: "This class will introduce students to the beauty of Lyrical/Contemporary movement. Because Lyrical draws heavily from a foundation in ballet, students will be introduced to the basics of ballet. Exercises will also to help them develop the concepts of inversion, contraction and suspension, how to move on the floor or from and upright position to a floor position which are more typical of contemporary or lyrical styles. Musicality and improvisation will also be concepts that are introduced at this level. Upper and lower body strength and core training necessary to safely advance in contemporary movement will begin at this level. Students would expect to study at this level for 1 to 2 years."
            },
            {
                title: "Lyrical/Contemp 2",
                age: "9-11",
                blurb: "This level 2 class is designed for children with at least -2 years of technical dance training. Previous or concurrent ballet training is recommended at this level as movement begins to draw heavily on good ballet foundations. Contemporary and Lyrical styles draw heavily upon ballet technique and therefore some basic ballet skills will be reviewed in this class in addition to advancing movements to and from the floor along and more complex combinations of the movements introduced at Level 1. At this level students will participate in conditioning exercises designed to encourage core body strength, leg and foot strength and balance. Students should expect to study for at least 2-3 years at this level."
            },
            {
                title: "Lyrical/Contemp 3",
                age: "10-14",
                blurb: "This level 3 class is designed for dancers with at least 4-6 years of dance training that emphasized ballet technique. Some formal ballet training is recommended for the student to truly succeed at this level. Level 3 Contemporary is primarily designed to challenge dancer�s skills physically and mentally. The classes consist of strength, flexibility and balance exercises designed to develop posture, body alignment, transfer of weight, stretched legs and core rotation and the ability to move freely from an upright level to the floor and back to standing. Students should expect to study for several years at this level. Like Ballet, it is anticipated that there will be a wide range of students in Lyrical 3 this year. Students who have just completed Lyrical 2, should expect to register for Lyrical 3A. Students who were in 3A last year should contact Mia for class placement."
            },
            {
                title: "Lyrical/Contemp 4",
                age: "13 and up",
                blurb: "This intermediate to advanced level class is intended for the student who has 3 plus years of training in ballet, jazz or lyrical at the intermediate level. In this class, students will work on developing the ability to execute complex movements on and off the floor, turning sequences, partner and counterbalance techniques, and group lifts. Emphasis on proper technique is critical at this level along with willingness to explore a variety of new skills and positions."
            },
            {
                title: "Lyrical/Contemp 5",
                age: "14 and up",
                blurb: "This class is intended for the advanced student with a strong ballet foundation and many years of training. Because of the physical nature of this movement, students are encouraged to train outside of this class in exercises the promote strength, stability, flexibility and cardiovascular conditioning as well as ballet. Complex jumping and turning sequences, floor and partner work may be explored at this level and therefore students are expected to have good phyiscal conditioning and a foundation of strong technique."
            }
        ]
    },
    {
        categoryTitle: "Explore Teen / Adult",
        categoryUrlTag: "expteenadult",
        categoryImg: (<img src={Pointe} alt="Explore Teen / Adult"/>),
        categoryBlurb: "Explore Teen - Adult ...",
        classes: [
            {
                title: "Explore Hip Hop",
                age: "Adult",
                blurb: "One of the most popular classes in the studio.  "
            },
            {
                title: "Explore Jazz",
                age: "Adult",
                blurb: "Join us as we explore jazz/ lyrical dance based on classical technique for adults, any age, with random excursions into different music and movement. Better for those with some dance experience, but motivated beginners welcome, too."
            },
            {
                title: "Explore Ballet",
                age: "Adult",
                blurb: "Experience the joy of ballet and the physical and mental benefits it provides without the pressures of performance! This ballet class is designed for adults who wish to learn and enjoy the fundamentals of a traditional ballet barre and centerwork in a class geared specifically toward adults!"
            },
            {
                title: "Explore Street Jazz",
                age: "Teen - Adult",
                blurb: "Interested in adding a new style or genre to your repetoire? Street jazz is an amalgamation of several different styles, jazz, hip hop and funk that emerged out of more casual dancing in settings outside of traditional studios. Street jazz is a mix of fast, intricate footwork, graceful spins and acrobatic floor moves. This genre of dance works on dancer's creativity, their understanding of the music and their energy, fusing traditional jazz with hip hop."
            }
        ]
    },
    {
        categoryTitle: "Explore Children",
        categoryUrlTag: "expchildren",
        categoryImg: (<img src={Pointe} alt="Explore Children"/>),
        categoryBlurb: "Explore Children ...",
        classes: [
            {
                title: "Explore Creative Movement",
                age: "4-6",
                blurb: "An introduction to all dance techniques encompassing dance fundamentals & terminology. Class includes creative movement, improvisation, and instruction of basic dance steps using literature and games, designed to improve motor skills, self expression, imagination, socialization and confidence. Children discover new ways of moving as they explore the elements of dance, build a movement vocabulary, and develop basic dance and ballet skills."
            },
            {
                title: "Explore Theatre/Jazz",
                age: "6-8",
                blurb: "A combination of instruction in jazz, both classic and lyrical, and character work to strengthen technique and add style. Focus on dance terminology and steps to strengthen basis of technique, while learning character through movement and increasing performance quality. Class culminates in choreography to music from movie and Broadway soundtracks."
            },
            {
                title: "Explore Theatre/Jazz",
                age: "9-11",
                blurb: "A combination of instruction in jazz, both classic and lyrical, and character work to strengthen technique and add style. Focus on dance terminology and steps to strengthen basis of technique, while learning character through movement and increasing performance quality. Class culminates in choreography to music from movie and Broadway soundtracks. Older students will work at a more advanced level than the younger class."
            },
            {
                title: "Explore Middle School Ballet/Lyrical",
                age: "5th grade and up",
                blurb: "This class, geared toward dancers in middle school, will introduce to the students to the fundamentals of ballet technique through barre and center work, helping the student to explore the art of jumping, turning and travelling! In addition, skills learned here will help students to explore the world of Lyrical Jazz through floorwork, and lyrical combinations incorporating elements from both genres."
            },
            {
                title: "Explore Elementary School Ballet/Lyrical",
                age: "2nd grade and up",
                blurb: "This class, geared toward dancers in elementary school, will introduce to the students to the fundamentals of ballet technique through barre and center work, helping the student to explore the art of jumping, turning and travelling! In addition, skills learned here will help students to explore the world of Lyrical Jazz through floorwork, and lyrical combinations incorporating elements from both genres."
            },
            {
                title: "Explore Elementary School Jazz/Hip Hop",
                age: "2nd grade and up",
                blurb: "For students just entering the world of dance or dancers who are curious want to learn about both jazz styles and hip hop styles, this class will introduce students to elements of both genres while stressing style, musicality and technique. Jazz and Hip Hop are both upbeat and energetic styles that appeal to many young dancers. This class is designed to be pure fun!"
            },
            {
                title: "Explore Middle School Jazz/Hip Hop",
                age: "5th grade and up",
                blurb: "This class, geared toward the middle school student, is a fast paced introduction to the world of jazz and hip hop along with their similarities and their differences. Through skill based exercises and combinations in both genres, students will explore the many facets of these two different yet similarly upbeat and energetic styles of dance."
            },
            {
                title: "Explore Jazz",
                age: "Elementary School",
                blurb: "Curious about all the many styles of Jazz? Then this class is just for you. EXPLORE Jazz is perfect for the new student who wants to jump in to a high energy dance style or for the experienced dance student who wants to learn more about this many faceted dance style. From Broadway stages, to salsa studios, from African roots, to street funk, 'jazz' has it all and we're ready to jump in and EXPLORE!"
            }
        ]
    }
]