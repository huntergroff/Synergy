import '../../Styles/ClassTables.css'
import { useState, useEffect } from 'react';

/** Configure all settings for table URL generation! */
const baseUrl = "https://app.jackrabbitclass.com/jr3.0/Openings/Openingsdirect?OrgID=";
const orgID = "538745";

// List of columns to be hidden
const hideCols = ["Instructors", "Gender", "Ages", "EndDate", "Session", "Description", "StartDate", "Openings", "Tuition"];

// List of auto-hidden colums to be shown
// Cat1 = Class Type (Ballet, Hip Hop, Etc.)
// Cat2 = Ignite, Explore, Focus
const showCols = ["Cat1", "Cat2"];

/**
 * List of styles to be appended to the url.
 * To see all url-compatible styles visit:
 * https://help.jackrabbitclass.com/help/tricks-for-query-strings
 */
const styles = ["font-family:Helvetica", "font-size:19px"];

// Helper method to generate a URL parameter.
function generateStaticParam(urlParam, list, regex) {
    let finalParam = "&" + urlParam + "=";
    list.forEach(function(col, index) {
        finalParam += col;
        if (list[index + 1]) {
            finalParam += regex;
        }
    })
    return finalParam;
}

function generateSelectedParam(urlParam, value) {
    return (value == "All") ? "" : "&" + urlParam + "=" + value;
}

/**
https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgID=538745
&Cat2=Ignite&sort=Days,StartTime,Cat1,Class&style=font-size:15px&hidecols=
Instructors,Gender,Ages,EndDate,Session,Description,StartDate,Openings,Tuition&showcols=Cat1
 */

const ClassTables = () => {

    // state and event handlers for selecting a new classtype
    const [classtype, setClasstype] = useState("All");
    const changeClasstype = event => {
        setClasstype(event.target.value);
    }

    // state and event handlers for selecting a new pathway
    const [pathway, setPathway] = useState("All");
    const changePathway = event => {
        setPathway(event.target.value);
    }

    useEffect(() => {
      resetUrl();
    }, [pathway, classtype])
    

    const [tableURL, setTableURL] = useState(generateTableUrl());
    function resetUrl() {
        const url = generateTableUrl();
        setTableURL(url);
    }

    function generateTableUrl() {
        const finalUrl = baseUrl
        + orgID 
        + generateStaticParam("hideCols", hideCols, ",") 
        + generateStaticParam("showCols", showCols, ",") 
        + generateStaticParam("style", styles, ";") 
        + generateSelectedParam("Cat1", classtype) 
        + generateSelectedParam("Cat2", pathway);
        return finalUrl;
    }

  return (
    <div className='container'>
        <div className='classtables-header'>
            <h1>All Classes</h1>
            <div className='classtables-menus'>
                <form>
                    <label>Select Class Type</label>
                    <select value={classtype} name="pathways" onChange={changeClasstype}>
                        <option value="Ballet">Ballet</option>
                        <option value="Hip Hop">Hip-Hop</option>
                        <option value="Creative Movement">Creative Movement</option>
                        <option value="All">All</option>
                    </select>
                </form>
                <form>
                    <label>Select Pathway</label>
                    <select value={pathway} name="pathways" onChange={changePathway}>
                        <option value="Explore">Explore</option>
                        <option value="Ignite">Ignite</option>
                        <option value="Focus">Focus</option>
                        <option value="All">All</option>
                    </select>
                </form>
            </div>
        </div>
        <iframe src={tableURL} className='class-table'/>
    </div>
  )
}

export default ClassTables