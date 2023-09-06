//React Imports
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//Some component imports
import AfterSchool from './Components/Pages/AfterSchool';
import ClassTables from './Components/Pages/ClassTables';
import Contact from './Components/Pages/Contact';
import Facilities from './Components/Pages/Facilities';
import FAQ from './Components/Pages/FAQ';
import Footer from './Components/Footer';
import { MenuItems } from './Components/Header/MenuItems.js';
import Navbar from './Components/Header/Navbar';
import NotFound from './Components/Pages/NotFound';
import OurTeam from './Components/Pages/OurTeam';
import Policies from './Components/Pages/Policies';
import Recital from './Components/Pages/Recital';
import Sparc from './Components/Pages/SPARC';
import Step from './Components/Pages/STEP';
import StudentAmbassadors from './Components/Pages/StudentAmbassadors';


function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
          // scroll by additional 80px to avoid navbar
          window.scrollBy(0, -80);
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div>
      <Navbar />
      <Routes>

      {/** Automatically render all routes from MenuItems.js */}
      {MenuItems.map((menu, index) => {
            return (
                <Route exact path={menu.link} element={menu.element} key={index} />
            );
          })}

      {/** Routes for classtables page to load with different initial values */}
      <Route exact path="/classtables" element={<ClassTables initialClasstype="All" initialPathway="All" initialSort="Classes"/>}/>
      <Route exact path="/classtables-explore" element={<ClassTables initialClasstype="All" initialPathway="Explore" initialSort="Days" />}/>
      <Route exact path="/classtables-ignite" element={<ClassTables initialClasstype="All" initialPathway="Ignite" initialSort="Days" />}/>
      <Route exact path="/classtables-focus" element={<ClassTables initialClasstype="All" initialPathway="Focus" initialSort="Days" />}/>
      <Route exact path="/classtables-daily" element={<ClassTables initialClasstype="All" initialPathway="All" initialSort="Days" />}/>
      <Route exact path="/classtables-afterschool" element={<ClassTables initialClasstype="AfterSchool" initialPathway="All" initialSort="Days" />}/>
      
      {/** ADD NEW PAGES HERE! Other pages not included in MenuItems but requiring their own page */}
      <Route exact path="/faq" element={<FAQ />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/policies" element={<Policies />}/>
      <Route exact path="/facilities" element={<Facilities />}/>
      <Route exact path="/our-team" element={<OurTeam />}/>
      <Route exact path="/not-found" element={<NotFound />}/>
      <Route exact path="/recital" element={<Recital />}/>
      <Route exact path="/student-ambassadors" element={<StudentAmbassadors />}/>
      <Route exact path="/SPARC" element={<Sparc />}/>
      <Route exact path="/STEP" element={<Step />}/>
      <Route exact path="/after-school" element={<AfterSchool />}/>

      

      {/** Any invalid path will bring user to the "Not Found" page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
    </div>
  );
}

export default App;