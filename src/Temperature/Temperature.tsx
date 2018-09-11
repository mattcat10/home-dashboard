import * as React from 'react';
import './Temperature.css';

type TemperatureProps = {
  value: number
}

const Temperature = (props: TemperatureProps) => {
  return (
    <div className="temperature">
      {props.value} &#176; F
    </div>
  )
}

export default Temperature;
