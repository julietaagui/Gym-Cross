import './App.css';
import Init from './views/index';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from 'react'; 

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const changeTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  }
  

  return (
    
      <div className={`App bg-body-${themeMode}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark flex-column ${themeMode}`}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            </div>
          </div>
          <a className='nav-link text-white me-3' href='#' onClick={changeTheme}>
              {themeMode === 'light' ? <i className='bi bi-toggle-off fs-3'></i>:
              <i className='bi bi-toggle-on fs-3'></i>}
            </a>
        </nav>

        <div class="card text-center mb-3" style={{ Width: "18rem" }}>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        
      <Router>
            <Routes>
              <Route path='/' element={<Init themeMode={themeMode}/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
