import React from 'react'
import { Route, Routes } from 'react-router-dom';
import WeatherApp from './sample/Weather/WeatherApp';
import WeatherInfo from './sample/Weather/WeatherInfo';
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div>
      <Container>
          <Routes>
        <Route path='*' element={<WeatherApp/>}/>
        <Route path=':id' element={<WeatherInfo/>}/>
         </Routes>

        {/* <Test6 /> */}
        {/* <Gallerycopy/> */}
        {/* {<WhetherApp/>} */}
        </Container>
    </div>
  );
};

export default App;