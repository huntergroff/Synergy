/**
 * PolicyItems user guide:
 *      1. Add an item to the "PolicyItems" array in the following format:
 *         {
 *              title: "TITLE_OF_POLICY",
 *              blurb: "POLICY_DESCRIPTION",
 *              bullets (optional): [
 *                  "BULLET_POINT_1",
 *                  "BULLET_POINT_2",
 *              ]
 *              second_blurb (optional): "SECOND_BLURB"
 *         }
 *      2. PLEASE NOTE that the bullets array AND second_blurb field are optional. If there are no bullet points for a given 
 *         policy, or you don't need a blurb after the bullets, you can just insert an item with the title and blurb.
 *      2. Save this file and check that your question has been added to the FAQ page of the website!
 */

 export const PolicyItems = [
    {
        title: "COVID-19",
        blurb: "We don't like it very much."
    },
    {
        title: "Dress code",
        blurb: "We follow the following dress code at our studio, but this is more for you than it is for us. This all goes without saying that you don't show up naked.",
        bullets: [
            "Ballet: Leotard, ballet shoes, bun",
            "Hip hop: Clean dance sneakers, whatever comfy clothes you would like",
            "Lyrical: Leggings are pretty common"
        ]
    },
    {
        title: "Sick days",
        blurb: "If you are sick, please don't come to the studio. You're gonna get other people sick. Is that what you want? Hmm? Is it? I didn't think so. Since that's not what you want and it's not what we want either. Don't do it.",
        bullets: [
            "need",
            "to",
            "test",
            "out",
            "bullets"
        ],
        second_blurb: "this is the second blurb. Honestly, I ran out of things to say."
    }
]