import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavbarElement from './components/NavbarElement/NavbarElement';

function App() {
  return (
    <Router>
      <NavbarElement />
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/contact" element = { <Contact /> } />
      </Routes>
    </Router>
  );
}

export default App;
