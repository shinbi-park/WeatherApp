import React, { useCallback, useEffect, useRef, useState } from 'react';
import WeatherItem from './WeatherItem';
import WeatherSearch from './WeatherSearch';
import cityname from '../assets/api/city.list.json'


const WeatherApp = () => {

    const [city, setCity] = useState(cityname)
    const [text, setText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(15);
    const [target, setTarget] = useState('');

    // 대소문자 안가리고, 검색한 문자를 포함한 것들은 싹다 출력
    const onSearch = (text) => {
        setText(text)
        setCity(cityname.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
       
    }

    const Option = {
        root: null,
        rootMargin: '1px',
        threshold: '1',
    }
    
    // intersecting이 있을 때 콜백 함수 실행
    // page는 count값을 받는거같음 현재 count:15
    // page 인자에+ 1 한 것이 city배열의 길이보다 작을때 page+3 을 한다.
   
    const checkIntersect = useCallback(([entry], observer) => {
        if (entry.isIntersecting) {
            setCount(page => {
                if ( city.length >= page + 1  ) return page + 3;
                else return page;
            });
        }
    }, []);
    
    // target,  Option이 바뀔 경우 observer를 새로 등록한다.
    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(checkIntersect, Option);
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target, Option, checkIntersect]);


    return (
        <div>
            
            <WeatherSearch onSearch={onSearch}/>           
            { 
                city.length === 0 && <p>없져</p>
            } 
           
                     
            {
                // slice(0,count) -> 0 ~ count-1 의 크기만큼 배열을 잘라서 출력
                // 콜백함수를 통해 count값은 3씩 늘어난다.
               city.slice(0,count).map(item => <WeatherItem  key={item.id} item={item} />)
            }
            <div ref={setTarget}></div>
        </div>
    );
};

export default WeatherApp;

