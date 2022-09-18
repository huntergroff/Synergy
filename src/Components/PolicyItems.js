/**
 * PolicyItems user guide:
 *      1. Add an item to the "PolicyItems" array in the following format:
 *         {
 *              title: "TITLE_OF_POLICY",
 *              blurb: <p>POLICY_DESCRIPTION</p>
 *              bullets (optional): [
 *                  "BULLET_POINT_1",
 *                  "BULLET_POINT_2",
 *              ]
 *              second_blurb (optional): <p>SECOND_BLURB</p>
 *         }
 *      2. PLEASE NOTE that the bullets array AND second_blurb field are optional. If there are no bullet points for a given 
 *         policy, or you don't need a blurb after the bullets, you can just insert an item with the title and blurb.
 *      3. PLEASE NOTE that the blurb and second_blurb fields expect HTML code, such as p tags, while the title and bullets
 *         fields expect strings and lists of strings.
 *      4. Save this file and check that your question has been added to the FAQ page of the website!
 */
 import React from 'react';
 
 export const PolicyItems = [
    {
        title: "Registration and Jackrabbit Portal",
        blurb: 
        <p>
            All families will need to register via our online software, Jackrabbit Technologies. 
            A first time $15 registration fee is charged per family. Families are encouraged to update 
            their portal information yearly (contact information and emergency contact information at the least). 
            All communications and billing occur through this system and we rely on this information 
            in the event of an emergency. Returning families do not the pay registration fee.
        </p>
    },
    {
        title: "Tuition and Late Fees",
        blurb: 
        <p>
            Tuition Is due on or before the first day of each new session. Students enrolled in classes 
            for Session 1 will be automatically re-enrolled in Session 2 and each subsequent session unless 
            you notify us that your student will not be returning. You will be responsible for any tuition 
            fees accrued during that time. Please let us know of your intent to discontinue class at least 1 
            week before the end of the previous session so that waitlisted students may be offered your spot 
            for the next session. Failure to pay tuition on time may result in late fees. Ongoing delinquency 
            could result dismissal from class. To avoid lates fees, please reach out to us so that a payment plan can 
            be worked out in advance.
        </p>
    },
    {
        title: "Recital Costume Deposit",
        blurb: 
        <p>
            A recital costume deposit of $25 for EACH class is due in January. Recital costumes must be ordered 
            in January and February to ensure that we have time for delivery, fitting and re-ordering. A costume will 
            not be ordered for your child if this fee is not paid. This deposit is not refundable once costumes have 
            been ordered as Synergy will incur return and restocking fees for your costume or may not be able to 
            return it at all. This $25 however, is applied toward the total cost of your costume. If the costume 
            cost is above $25, a balance due for the remainder of the cost will be posted to your account once costumes 
            have been fitted. Students will not be given their costume until balances are paid.
        </p>
    
    },
    {
        title: "Multiclass Discount",
        blurb: 
        <p>
            Synergy offers a discount to families whose children take multiple classes. This number is based 
            on the number of classes taken by the entire family, not each individual dancer. Adult FOCUS fitness 
            classes such as TRX, Yoga, Eccentrics etc, do not apply to this number but Adult dance classes such as 
            Adult Hip Hop, do apply.
        </p>,
        bullets: [
            "1st class: regular price",
            "2nd class: regular price",
            "3rd class: 10%",
            "4th class: 10%",
            "5th class: 15%",
            "6th class and up: 20%"
        ]
    },
    {
        title: "Scholarships",
        blurb: 
        <p>
            A limited number of partial tuition scholarships are available. Please contact Rob or Mia if 
            you need financial assistance. 2022/2023 front counter snack sales will go to support programs 
            such as SPARC. Student Ambassadors and our Student Scholarship Fund.
        </p>
    },
    {
        title: "Class Placement and Age Ranges",
        blurb: 
        <p>
            Class placement is a difficult thing. Class dynamics change and some students progress more
            quickly than others. In order to develop proper technique and therefore increase safety and
            injury prevention, students are encouraged to register at the appropriate level regardless of
            age. Students will be removed from classes for which they do not exhibit the appropriate
            requisite conditioning and skills. As alternative classes may be full, we encourage you to please
            consult with your previous teachers regarding placement before registering. Please note
            students should expect to study several years at each level. Ages are meant to be general
            guidelines and assume that your student began their study with us when they were young.
            Students coming to dance training later may be placed in classes with younger students or
            directed to an EXPLORE age based class. Intermediate level classes begin to train more
            physically demanding skills and therefore students taking more classes per week or who are
            working on strength and conditioning within our program or outside the program may progress
            more rapidly. Class placement is not a punishment or related to how much we like your
            student. It is about proper skill progression and safety.
            <br></br>
            <br></br>
            General Guidelines for <i>Ignite Levels:</i>
        </p>,
        bullets: [
            "Level 1: Ages 7-9. Students should expect to study here for 1-2 years",
            "Level 2: Ages 8-11. Students should expect to study here for 2-3 years",
            "Level 3: Ages 10-13. Students should expect to study here for 2-4 years.",
            "Level 4: Ages 12-15. Students should expect to study here for 3-4 years",
            "Level 5: Ages 14-18. Students should expect to study here for 3-4 years",
        ],
        second_blurb: 
        <p>
            <b>**Level 3</b> is a critical time for transitioning to our more advanced levels. Taking time to learn at
            Level 3 will result in easier progression through skills in our advanced classes. Students who
            are dedicated to dancing and are taking multiple classes and conditioning at this level will
            naturally progress faster. Students who are not may expect to stay at this level longer that the
            suggested time. Dance is like any physical skill, be it soccer or piano, the more you practice,
            the quicker you progress. Advancement to Level 4 and 5 classes is not automatic.
        </p>
    },
    {
        title: "Attire and Hair",
        blurb: 
        <p>
            Proper dance attire and footwear is required for class participation. You would not expect a
            child to play in a sporting event without the right attire. Dance is the same. In order to ensure
            correct body alignment and muscle engagement, we must see your child's body. Large
            sweatshirts, loose clothing present an obstacle to teacher corrections and also hinder your
            child's ability to focus on movement. This is also true of hair. Long hair should be secured off
            of one's face and secured to allow free and correct movement.
        </p>
    },
    {
        title: "Attendance, Make-ups, and Zoom",
        blurb:
        <p>
            Regular attendance in class is important for skill progression. We recommend students
            commit to attending class each week. However, unforeseen circumstances often result in
            students having to miss class. Please reach out to your teacher or to Mia if you are interested
            in a make up class. Because of the popularity of some classes, we may or may not have a
            make up option for you. If you must stay at home but your student is able to dance or at least
            watch class, we encourage you to participate via Zoom. Please contact us before 2 pm on the
            day you wish to Zoom. After 2 pm, we can not guarantee that we will have the staff bandwidth
            to get your Zoom class initiated in time. We will make every effort to accommodate late notice.
        </p>
    },
    {
        title: "Class Cancellation",
        blurb: 
        <p>
            Synergy reserves the right to cancel classes when enrollment drops below 5 students. Tuition
            or a pro-rated amount of tuition will be refunded if we are unable to find a suitable alternative
            for your dancer.
        </p>
    },
    {
        title: "Snow Days and Cancelled Classes",
        blurb:
        <p>
            Synergy does not automatically follow the Chittenden East Supervisory Union, snow days.
            Often weather that closes schools in the morning clears by afternoon. We will attempt to
            make decisions about closing by 1 pm and this will be announced via the portal as well as
            through social media. Makeups are not offered due to snow closings unless the same class
            has been cancelled more than one time.
            <br></br>
            Individual classes are sometimes cancelled due to staff absence, when a suitable substitute
            teacher is not available. In this instance, your teacher will work with the class to find a time for
            making up time missed either during make up weeks, alternate days or by extending class
            times for a short period.
        </p>
    },
    {
        title: "Safety and Injury Prevention",
        blurb:
        <p>
            Our staff makes every reasonable effort to ensure your child's safety while attending class.
            Despite our best efforts, dance is a physically demanding activity and comes with certain
            inherent risks. Working with your child to support a strong, well rested and well nourished
            body goes a long way to preventing injuries.
        </p>
    },
    {
        title: "Recital Prep and Participation",
        blurb:
        <p>
            Students are encouraged but not required to participate in the end of the year recital (June
            date to be determined.). However, we feel that recital and practicing the art of performance is
            an important part of dance training. So we encourage all of our students to participate if able.
            Please communicate with your teacher if your child will not be participating. Generally Session
            4 is dedicated to Recital preparation. Regular or repeated absences during this time period are
            stressful for fellow students and for teachers who are trying to learn and set formations, or who
            are constantly needing to back track the class to review choreography with missing students.
        </p>
    },
    {
        title: "Cell Phones",
        blurb:
        <p>
            No cell phones are allowed in studios and cell phone usage is not during breaks from class.
            Students should be focused on the work being completed in class. Please support your
            students' efforts to be independent of their devices during studio time.
        </p>
    },
    {
        title: "Waiting Room Etiquitte",
        blurb:
        <p>
            Our waiting rooms are provided for the benefit of our students and their families. Students are
            asked to treat them respectfully including cleaning up any personal garbage, siting quietly
            while waiting for class. Etiquette signs are posted in waiting rooms. Students who
            consistently are unable to follow waiting room rules may be required to have a parent present
            for supervision.
        </p>
    },
    {
        title: "Arrival and Dismissal",
        blurb:
        <p>
            Students are expected to arrive to class on time and ready to dance. Arriving 10 minutes
            before class allows students a chance to smoothly transition, to interact with fellow students
            allowing for few disruptions to class once it begins. Students must check in AND out at the
            front desk each day. Teachers of students in elementary school want to see a parent before
            dismissing a child out of the building, so please come in or make yourself easily visible out
            front. Middle School students generally just let us know when they “see a parent” and High
            school students check in and out independently. Thank you for supporting this process. Our
            waiting rooms and parking lots are active and we want to ensure the safest flow of kids to and
            from our building.
        </p>
    },
    {
        title: "Food and Drink",
        blurb:
        <p>
            No food is allowed in the studios for any reason. Personal water bottles are encouraged and
            may be kept right outside studios for student use. Students in 7th grade and up may bring
            personal water bottles in to class in Studio A. Smaller studios do not have adequate space to
            allow for personal water bottles. Individual teacher discretion will be used in this instance. A
            small number of snacks are available for purchase from the front desk. Synergy does NOT
            have a compost option. If you send food items that require composting please include a
            package or container that the student may use to transport food waste home.
        </p>
    },
    {
        title: "Bus Program",
        blurb:
        <p>
            Our bus program is designed to assist busy families so that their children can participate in
            Synergy classes. You must register for the bus program for all students in elementary school
            who plan to arrive at the studio from Jericho Elementary or Underhill Central. A bus fee of $8
            per day will be added to your portal at the end of each Session and is only charged for the
            days your child comes on the bus. Students in the bus program will receive supervision, a
            snack and assistance directing their free time and getting ready for class. Students may arrive
            via the bus program for all 3:15, 3:30 and 3:45 classes. Students who need supervision for a 4
            o'clock or later class may be charged extra as we will need to pay staff to attend them during
            that time. Students are expected to be respectful of all rules related to the bus program and
            consistent failure to do so may result in students no longer being able to arrive at the studio via
            the bus.
        </p>
    },
    {
        title: "Valuables",
        blurb:
        <p>
            Synergy is not responsible for lost, stolen or damaged property. Waiting rooms and cubby
            spaces are bustling places and sometimes students accidentally gather up others' belongings
            or misplace belongings during class transitions. Please encourage your student to keep
            valuable or sentimental items at home. Please drop in and check our lost and found on a
            regular basis. Small items and jewelry are kept under the front desk.
        </p>
    },
    {
        title: "Photography and Video Recording / Social Media",
        blurb:
        <p>
            When you registered you were asked to sign a liability and a photo release. Synergy may use
            your child's image but not name in our social media posts, brochures, studio slide shows.
            Please email us if directly if you wish to restrict the use of your child's image in a public forum.
            Teachers will often create videos of recital pieces or in class combinations that the class is
            practicing. These are released only internally. There is no way to keep your child from this
            type of recording unless they are asked to leave the room each time. Please consider carefully
            if you want us also to restrict this as well. These videos are not available publicly.
        </p>
    },
]