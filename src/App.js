import './App.css';
import Navbar from './Components/Header/Navbar';
import { Routes, Route, useLocation }
    from 'react-router-dom';
import { MenuItems } from './Components/Header/MenuItems.js';
import Footer from './Components/Footer';
import { useEffect } from 'react';

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
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div>
      <Navbar />
      <Routes>
      {MenuItems.map((menu, index) => {
            return (
                <Route exact path={menu.link} element={menu.element} />
            );
          })}
    </Routes>
    <Footer />
    </div>
  );
}

export default App;