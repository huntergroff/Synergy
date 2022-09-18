//React Imports
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//Some component imports
import ClassTables from './Components/Pages/ClassTables';
import FAQ from './Components/Pages/FAQ';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Header/Navbar';
import { MenuItems } from './Components/Header/MenuItems.js';
import Footer from './Components/Footer';
import Policies from './Components/Pages/Policies';
import NotFound from './Components/Pages/NotFound';


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
      
      {/** Other pages not included in MenuItems but requiring their own page */}
      <Route exact path="/faq" element={<FAQ />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/policies" element={<Policies />}/>
      <Route exact path="/not-found" element={<NotFound />}/>

      {/** Any invalid path will bring user to the "Not Found" page */}
      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
    </div>
  );
}

export default App;