//React Imports
import React from "react";

//Icons and Images
import StudioFront from "../../Images/studio-front.jpg";
import StudioElev from "../../Images/studio-elev.jpg";
import StudioOblique from "../../Images/studio-oblique.jpg";
import StudioWide from "../../Images/studio-wide.jpg";
import StudioAElev from "../../Images/studio-a-elev.jpg";
import StudioARail from "../../Images/studio-a-railing.jpg";
import StudioASilks from "../../Images/studio-a-silks.jpg";
import StudioD from "../../Images/studio-d-elev.jpg";
import StudioC from "../../Images/studio-c-elev.jpg";
import StudioLobby from "../../Images/studio-lobby-party.jpg";

//CSS
import "../../Styles/Facilities.css";

/**
 * Renders "facilities" section
 */
const Facilities = () => {
  return (
    <div id="facilities" className="container">
      <div className="title">
        <h1>Facilities</h1>
        <h2>16 River Road, Jericho, VT</h2>
      </div>
      <div className="photos-1">
        <div className="photos-1-1">
          <img src={StudioFront} alt="Synergy Dance studio facade"></img>
        </div>
        <div className="photos-1-2">
          <img src={StudioElev} alt="Synergy Dance studio elevation"></img>
          <img
            src={StudioOblique}
            alt="Synergy Dance studio oblique view"
          ></img>
        </div>
      </div>
      <div className="photos-2">
        <img src={StudioWide} alt="Synergy Dance studio view from afar"></img>
      </div>
      <div className="text-1">
        <p>
          Synergy Center for Dance is a new 6,000+ square foot studio
          conveniently located near Browns River Middle School on River Road in
          Jericho. With access to the nearby schools, the market, the library
          and Mills River Park, Synergy makes it easy for young families to
          coordinate dance with many other activities. The space is thoughtfully
          designed with ample waiting spaces and large windows, which allow us
          to enjoy our beautiful surroundings year round.
        </p>
      </div>
      <div className="photos-3">
        <div className="photos-3-1">
          <img
            src={StudioAElev}
            alt="The staircase and mezzanine in Studio A"
          ></img>
        </div>
        <div className="photos-3-2">
          <img src={StudioASilks} alt="Hanging silks in Studio A"></img>
          <img src={StudioARail} alt="The mezzanine railing in Studio A"></img>
        </div>
      </div>
      <div className="photos-4">
        <div className="photos-4-2">
          <img src={StudioC} alt="The windows in Studio C"></img>
          <img src={StudioD} alt="The windows in Studio D"></img>
        </div>
        <div className="photos-4-1">
          <img
            src={StudioLobby}
            alt="Mia and Rob celebrate the opening of the studio"
          ></img>
        </div>
      </div>
      <div className="text-2">
        <p>
          Synergy's four climate studios all contain sprung floors for the
          protection of young developing bodies. 3 studios contain professional
          grade Marley dance floors, and 1 a hardwood flooring. Studios contain
          mirrors, ballet barres, televisions and cameras allow for remote
          learning or for use as teaching tools. Our largest studio includes a
          mezzanine which allows parents, teachers and guests to easily view
          classes and performances.
        </p>
      </div>
    </div>
  );
};

export default Facilities;
