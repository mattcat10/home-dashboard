import * as React from 'react';
import './HeaderContent.css';
import Temperature from '../Temperature/Temperature';
import CurrentDateTime from '../CurrentDateTime/CurrentDateTime';

type HeaderContentProps = {}

const HeaderContent = (props: HeaderContentProps) => {
  return (
    <div className="headerContent">
      <div><CurrentDateTime displayDate={true} displayTime={true} /></div>
      <div className="temperatureContent"><Temperature  value={75}/></div>
    </div>
  )
}

export default HeaderContent;
