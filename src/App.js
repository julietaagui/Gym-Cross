import './App.css';
import Init from './views';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import moment from 'moment'; //Librería para manejar fechas y tiempos en JavaScript.
import 'moment/locale/es'; // Configura moment para usar español

moment.locale('es'); // Configura moment para usar español

function App() {

  const [themeMode, setThemeMode] = useState('light')
  const [dates, setDates] = useState([]); //date, para almacenar una lista de fechas

  const changeTheme = () => {
    if(themeMode === 'light'){
      setThemeMode('dark')
    }else{
      setThemeMode('light')
    }
  }

  useEffect(() => {
    const startDate = moment().startOf('month');//establece uel rango de fechas desde el inicio del mes...
    const endDate = moment().endOf('week'); // hasta el final de la semana
    const days = [];

    while (startDate <= endDate) {
      days.push({       // Se llena un arreglo con las fechas:
        day: startDate.format('D'), //numero de dia
        dayOfWeek: startDate.format('ddd'), // nombre del dia 
        isCurrentDay: startDate.isSame(moment(), 'day') //indica dia actual
      });
      startDate.add(1, 'days');
    }

    setDates(days); // Actualiza el estado "dates" con el arreglo de fechas generado
  }, []);

  return (
    <div className={`bg-body-${themeMode}`}>
      <div class={`bg-dark ${themeMode}`}>
        <div className="container-fluid d-flex flex-column">
            <div className="mb-4">
              <h4 className="text-white">Hola, Julieta</h4>
            </div>
          <div className="d-flex align-items-left mt-auto ms-auto">
            <div className="bg-success rounded-circle text-white p-2 text-center me-2">
              <strong>{moment().format('MMM')}</strong>
            </div>
            <ul className="list-unstyled d-flex ms-3">
              {dates.map((date, index) => (
                //Imprime en el DOM las fechas
                <li key={index} className={`px-2 text-center ${date.isCurrentDay ? 'text-warning' : 'text-white'}`}>
                  <span>{date.day}</span><br/>
                  <small>{date.dayOfWeek}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a className='nav-link text-white me-3' href='#' onClick={changeTheme}>
              {themeMode === 'light' ? <i className='bi bi-toggle-off fs-3'></i>:
              <i className='bi bi-toggle-on fs-3'></i>}
            </a>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Init/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
