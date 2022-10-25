import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import React from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'INSERT_API_KEY';

export default function Weather({latitude,longitude}) {
    const [temp, setTemp] = useState(0)
    const [speed,setSpeed] = useState(0)
    const [direction, setDirection] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const address = API_URL +
        'lat=' + latitude +
        '&lon=' + longitude +
        '&units=metric' +
        '&appid=' + API_KEY;
    
        console.log(address);
    
        axios.get(address)
          .then((response) => {
          console.log(response.data);
          setTemp(response.data.main.temp);
          setSpeed(response.data.wind.speed);
          setDirection(response.data.wind.deg);
          setDescription(response.data.weather[0].description);
          setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
          console.log(ICON_URL + response.data.weather[0].icon + '@2x.png');
        }).catch (error => {
          alert(error);
        });
      }, [])
    

    return (
        <>
        <h3>Weather on your location</h3>
        <p>{temp} °C</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt=""/>
        </>
    )
}