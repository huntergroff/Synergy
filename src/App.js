import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {MenuItems} from './Components/MenuItems.js';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
      {MenuItems.map((menu, index) => {
            return (
                <Route exact path={menu.link} element={menu.element} />
            );
          })}
    </Routes>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
