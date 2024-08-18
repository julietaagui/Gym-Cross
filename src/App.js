import './App.css';
import Init from './views/index';
import Training from './views/training';
import Activity from './views/activity';
import Exercise from './views/exercise';
import Body from './views/body';
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
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Init themeMode={themeMode}/>}/>
          <Route path='/training' element={<Training/>} />
          <Route path='/activity' element={<Activity/>} />
          <Route path='/exercise' element={<Exercise/>} />
          <Route path='/body' element={<Body/>} />
        </Routes>
      </div>


      <footer className="bg-dark text-white py-3">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <nav className="navbar navbar-expand-lg navbar-dark p-0 w-100">
                <div className="container-fluid p-0">
                  <ul className="navbar-nav d-flex flex-row w-100 justify-content-between">
                    <li className="nav-item flex-grow-1 text-center">
                      <NavLink className="nav-link d-flex flex-column align-items-center" to="/training">
                        <i className="bi bi-file-earmark-text icons-navigation"></i>
                        <span>Entrenamiento</span>
                      </NavLink>
                    </li>
                    <li className="nav-item flex-grow-1 text-center">
                      <NavLink className="nav-link d-flex flex-column align-items-center" to="/activity">
                        <i className="icons-navigation bi bi-reception-3"></i>
                        <span>Actividad</span>
                      </NavLink>
                    </li>
                    <li className="nav-item flex-grow-1 text-center">
                      <NavLink className="nav-link d-flex flex-column align-items-center" to="/exercise">
                        <i className="icons-navigation bi bi-reception-3"></i>
                        <span>Ejercicios</span>
                      </NavLink>
                    </li>
                    <li className="nav-item flex-grow-1 text-center">
                      <NavLink className="nav-link d-flex flex-column align-items-center" to="/body">
                        <i className="icons-navigation bi bi-person-arms-up"></i>
                        <span>Body</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </footer>



    </div>
  );
}

export default App;
