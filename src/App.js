import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// CSS imports.
import './styles/portfolio.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faShieldHalved, faDownload, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faAirbnb, faSpotify } from '@fortawesome/free-brands-svg-icons';

// Add icons to our library.
library.add(
  faSun, faMoon, faShieldHalved, faLinkedin, faGithub, faInstagram, faAirbnb,
  faSpotify, faDownload, faArrowUpRightFromSquare
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
