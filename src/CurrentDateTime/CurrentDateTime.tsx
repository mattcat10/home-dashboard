import * as React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import './CurrentDateTime.css';

type CurrentDateTimeProps = {
  displayDate: boolean,
  displayTime: boolean
}

const CurrentDateTime = (props: CurrentDateTimeProps) => {
  const { displayDate, displayTime } = props;
  return (
    <div>
      {displayDate && <div className="currentDate"><Moment interval={86400000} format="MM/DD/YYYY"/></div>}
      {displayTime && <div className="currentTime"><Moment interval={1000} format="hh:mm:ss A" tz={"America/Chicago"}/></div>}
    </div>
  )
}

export default CurrentDateTime;
