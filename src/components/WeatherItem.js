import React from 'react';
import { Link } from 'react-router-dom';


const WeatherItem = ({item,cityId}) => {
    const { id, name, country} = item
   
    return (
        <div style={{textAlign:'center'}}>
        
        <Link to={`${id}`}><p class="btn btn-primary btn-outline-light" style={{width:'400px', textAlign:'left'}}><span className="badge rounded-pill bg-warning">{country}</span><span className="text-primary">{name}</span></p></Link>
           
        </div>
    );
};

export default WeatherItem;