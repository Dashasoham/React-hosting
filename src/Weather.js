import React from 'react';
import axios from 'axios';

export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `Hello, The weather in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = '8531f7780be3a3039a0314e6c276f900';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);

  return <h1>Hi</h1>;
}
