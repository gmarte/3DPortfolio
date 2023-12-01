import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

import ReactGA from 'react-ga4';


function App() {
  const TRACKING_ID = "G-F4VRD1QF0G"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/about" element={<About />}  />
                <Route path="/projects" element={<Projects />}  />
                <Route path="/contact" element={<Contact />}  />
            </Routes>
        </Router>
    </main>
  )
}

export default App
