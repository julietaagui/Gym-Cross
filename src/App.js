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
    <Router>
      <div className={`App bg-body-${themeMode}`}>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark flex-column ${themeMode}`}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path='/' element={<Init themeMode={themeMode}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
