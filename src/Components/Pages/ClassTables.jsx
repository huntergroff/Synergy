//React Imports
import React, { useState, useEffect, useCallback } from "react";

//CSS
import "../../Styles/ClassTables.css";

/** Configure all settings for table URL generation! */

//Base url:
const baseUrl =
  "https://app.jackrabbitclass.com/jr3.0/Openings/Openingsdirect?OrgID=";
//Org id:
const orgID = "538745";

//List of columns to be hidden:
const hideCols = [
  "Instructors",
  "Gender",
  "Ages",
  "EndDate",
  "Session",
  "Description",
  "StartDate",
  "Openings",
  "Tuition",
];

/**
 * List of auto-hidden colums to be shown
 *      Cat1 = Class Type (Ballet, Hip Hop, Etc.)
 *      Cat2 = Program (Ignite, Explore, Focus)
 */
const showCols = ["Cat1", "Cat2"];

//Order of sort parameters when different sort options are selected by the user.
const daysSort = ["Days", "StartTime", "Cat1", "Class", "Cat2"];
const classSort = ["Cat1", "Cat2", "Class", "Days", "StartTime"];

/**
 * List of styles to be appended to the url.
 * To see all url-compatible styles visit:
 * https://help.jackrabbitclass.com/help/tricks-for-query-strings
 */
const styles = ["font-family:Helvetica", "font-size:19px"];

// Helper method to generate a URL parameter.
function generateStaticParam(urlParam, list, regex) {
  let finalParam = "&" + urlParam + "=";
  list.forEach(function (col, index) {
    finalParam += col;
    if (list[index + 1]) {
      finalParam += regex;
    }
  });
  return finalParam;
}

const getSortList = (sortInput) => {
  return sortInput === "Days" ? daysSort : classSort;
};

// Helper method to generate a url parameter based on user selection.
function generateSelectedParam(urlParam, value) {
  return value === "All" ? "" : "&" + urlParam + "=" + value;
}

/**
 * Main element for the "classtables" page.
 * @param {initialClasstype} the initial classtype selected when the page loads.
 * @param {initialPathway} the initial pathway (Explore, Ignite, Focus) selected when the page loads.
 * @param {initialSort} the initial sort option selected when the page loads.
 */
const ClassTables = ({ initialClasstype, initialPathway, initialSort }) => {
  // state and event handlers for selecting a new classtype
  const [classtype, setClasstype] = useState(initialClasstype);
  const changeClasstype = (event) => {
    setClasstype(event.target.value);
  };

  // state and event handlers for selecting a new pathway
  const [pathway, setPathway] = useState(initialPathway);
  const changePathway = (event) => {
    setPathway(event.target.value);
  };

  // state and event handlers for sorting the list in different ways.
  // note that sort requires two states, one for the sort itself and one for the list to be used in the url generation
  const [sort, setSort] = useState(initialSort);

  const [sortList, setSortList] = useState(getSortList(sort));
  const changeSort = (event) => {
    setSort(event.target.value);
    setSortList(getSortList(event.target.value));
  };

  // generate url for table based on static params and user-selected params.
  // uses callback to satisfy the dependency of useEffect.
  const generateTableUrl = useCallback(() => {
    const finalUrl =
      baseUrl +
      orgID +
      generateStaticParam("hideCols", hideCols, ",") +
      generateStaticParam("showCols", showCols, ",") +
      generateStaticParam("style", styles, ";") +
      generateStaticParam("sort", sortList, ",") +
      generateSelectedParam("Cat1", classtype) +
      generateSelectedParam("Cat2", pathway) +
      "&Status=Active";
    return finalUrl;
  }, [classtype, pathway, sortList]);

  // state for table url, with effect handler that updates the table url when user makes a new classtype or pathway selection.
  const [tableURL, setTableURL] = useState(generateTableUrl);
  useEffect(() => {
    const url = generateTableUrl;
    setTableURL(url);
  }, [pathway, classtype, sort, generateTableUrl]);

  // return component
  return (
    <div className="container">
      <div className="classtables-header">
        <h1>
          {pathway === "All" ? "" : pathway}{" "}
          {classtype === "All" ? "" : classtype} Classes
        </h1>
        <div className="classtables-menus">
          <form>
            <label>Select Class Type</label>
            <select
              value={classtype}
              name="classtypes"
              onChange={changeClasstype}
            >
              <option value="AfterSchool">After School</option>
              <option value="Ballet">Ballet</option>
              <option value="Camp">Camp</option>
              <option value="Creative Movement">Creative Movement</option>
              <option value="Hip Hop">Hip Hop</option>
              <option value="Jazz">Jazz</option>
              <option value="Lyrical">Lyrical</option>
              <option value="PBT">PBT</option>
              <option value="Pointe">Pointe</option>
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
          <form>
            <label>Sort By</label>
            <select value={sort} name="sort" onChange={changeSort}>
              <option value="Days">Days</option>
              <option value="Classes">Class Type</option>
            </select>
          </form>
        </div>
      </div>
      <iframe
        src={tableURL}
        className="class-table"
        title="jackrabbit-classes-table"
      />
    </div>
  );
};

/**
 * A simplified version of the class tables element with no title or selection menus.
 * Currently used to display camps on the events page, but can be used for other purposes.
 * @param {classtype} the class type to be displayed in the table.
 * @param {pathway} the pathway to be displayed in the table.
 * @param {sort} the sort option to be displayed in the table.
 * @returns
 */
export const SimpleClassTables = ({ classtype, pathway, sort }) => {
  // generate url for table based on static params and user-selected params.
  // uses callback to satisfy the dependency of useEffect.
  const sortList = getSortList(sort);

  const generateTableUrl = useCallback(() => {
    const finalUrl =
      baseUrl +
      orgID +
      generateStaticParam("hideCols", hideCols, ",") +
      generateStaticParam("showCols", showCols, ",") +
      generateStaticParam("style", styles, ";") +
      generateStaticParam("sort", sortList, ",") +
      generateSelectedParam("Cat1", classtype) +
      generateSelectedParam("Cat2", pathway) +
      "&Status=Active";
    return finalUrl;
  }, [classtype, pathway, sortList]);

  // state for table url, with effect handler that updates the table url when user makes a new classtype or pathway selection.
  const tableURL = generateTableUrl();

  return (
    <iframe
      src={tableURL}
      className="class-table"
      title="jackrabbit-classes-table"
    />
  );
};

export default ClassTables;
