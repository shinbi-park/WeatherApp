import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import WeatherApp from './components/WeatherApp';
import WeatherInfo from './components/WeatherInfo';


const App = () => {
  return (
    <div>
      <Container>
          <Routes>
        <Route path='*' element={<WeatherApp/>}/>
        <Route path=':id' element={<WeatherInfo/>}/>
         </Routes>

        </Container>
    </div>
  );
};

export default App;