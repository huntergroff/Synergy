//React Imports
import React, { useState, useEffect } from 'react'
import Papa from "papaparse";

import Pointe from '../../Images/pointe.jpg'

//CSS
import '../../Styles/Events.css'

/**
 * Renders a single event
 */
const SynergyEvent = ({event}) => {
  if (event) {
    return (
    <div className="eventbox">
      {/* Only add image if provided with one */}
      {event.IMAGE_OPTIONAL ? <img src={event.IMAGE_OPTIONAL} alt="New Event"></img> : <></>}
      <div>
        <h3>{event.TITLE ? event.TITLE : ""}</h3>
        {/* Only add location if provided with one */}
        <p className="datetime">{event.DATE_TIME ? event.DATE_TIME : ""} <br/> {event.LOCATION_OPTIONAL ? `at ${event.LOCATION_OPTIONAL}` : ""}</p>
        {event.DESCRIPTION ? <p className="description">{event.DESCRIPTION}</p> : <></>}
        {event.LINK_OPTIONAL && event.LINK_TEXT_OPTIONAL ? <a href={event.LINK_OPTIONAL} target="_blank" rel="noopener noreferrer">{event.LINK_TEXT_OPTIONAL}</a> : <></>}
      </div>
    </div>
    )
  }
  return (<></>)
}

/**
 * Main element for the "other events" page.
 */
const Events = () => {

  // State for loading data from google sheets.
  const [googleSheetData, setGoogleSheetData] = useState({});

  // This useEffect hook fetches the data from google sheets on page load.
  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQvCf3uHNT26Wb9ApDfYVSPbUIBsX7fjqejut1LCRptL8TET9DDmPElpL9IsJgosqT1aMUscfVIrzjC/pub?gid=62357513&single=true&output=csv", 
    {
      download: true,
      header: true,
      complete: function(results) {
        setGoogleSheetData(results.data);
      }
    // BLOCK THIS ERROR SO THAT ABOVE USEEFFECT ONLY RUNS ONCE
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })}, []);

  const renderEvents = (sheetData) => {
    if (sheetData[0]) {
      return sheetData.map((event, index) => {
        return <SynergyEvent event={event} key={index} />;
      });
    }
    return (
      <div className="eventbox">
        <p className="datetime">
          No upcoming events right now. Please check back soon!
        </p>
      </div>
    );
  };
  

  return (
    <div className="events container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <h2>Check back here for a regularly updated list of upcoming events at Synergy Center for Dance and the Performing Arts!</h2>
      </div>

      {renderEvents(googleSheetData)}
    </div>
  )
}

export default Events