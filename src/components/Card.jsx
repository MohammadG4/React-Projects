import React from 'react'
import "./Card.css"
export const Card = ({date, name,remains}) => {
let dateArr = date.split("-");
let month="NA";
let day="0"
day=(dateArr[2])?dateArr[2]:"0";
// day=dateArr[2]
if (dateArr[1] == "01") month = "Jan";
else if (dateArr[1] == "02") month = "Feb";
else if (dateArr[1] == "03") month = "Mar";
else if (dateArr[1] == "04") month = "Apr";
else if (dateArr[1] == "05") month = "May";
else if (dateArr[1] == "06") month = "Jun";
else if (dateArr[1] == "07") month = "Jul";
else if (dateArr[1] == "08") month = "Aug";
else if (dateArr[1] == "09") month = "Sep";
else if (dateArr[1] == "10") month = "Oct";
else if (dateArr[1] == "11") month = "Nov";
else if (dateArr[1] == "12") month = "Dec";
// let newDate = `${month} ${day}`

console.log(dateArr)


  return (
    <div className='mainCard'>
      <p className="date">{month}<br/>{day}</p>
      <p className="name">{name}</p>
      <p className="remains">{remains}</p>

    </div>
  )
}
