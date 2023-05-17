import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WeatherInfo = () => {
   
   const {id} = useParams()
 
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [temp, setTemp] = useState('')
    const [weather, setWeather] = useState('')
    const [name, setName] = useState('')

    useEffect( () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`

        axios.get(url)
             .then(res => {
                setName(res.data.name)
                 setTemp(res.data.main.temp)
                 setMin(res.data.main.temp_min)
                 setMax(res.data.main.temp_max)
                 setWeather(res.data.weather[0].main)
              
                 
             })
          
    },[id])

    

    return (
        <div class="card bg-light mb-3">
        <div class="card-header" style={{ textAlign:'center'}}><h1 style={{color:'black'}}><strong>{name}</strong></h1>
            <p class="card-text text-primary" >{weather}</p>
        </div>
        <div class="card-body" style={{margin:'0 auto'}}>
           
            <p class="card-text" style={{fontSize: '80px', textAlign:'center', color:'navy'}}><strong>{Math.floor(temp-273.15)}º</strong></p>
            <p class="card-text" style={{textAlign:'center', fontSize:'20px'}}><span class="badge bg-dark">최고:{Math.floor(max-273.15)}º&nbsp;&nbsp;&nbsp;&nbsp;최저:{Math.floor(min-273.15)}º</span></p>
            
        </div>
        </div>
      
    );
};

export default WeatherInfo;
