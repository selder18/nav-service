import React from 'react';

const StaticNavEntry = (props) => {
  const itemStyle = {
    color: "white",
    fontFamily: `"BlinkMacSystemFont", "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif`,
    fontSize: "22px",
    cursor: "pointer",
    transition: `color 195ms ease-in 0s`,
    transitionProperty: `color`,
    transitionDuration: `500ms`,
    transitionTiming: `ease-in`,
    transitionDelay: 0,
    padding: "4px"
  }

  return(
    <li style={itemStyle} onClick={(e) => props.selectAdventure(props.adventure.id)}>
      {props.adventure.title}
    </li>
  )
}

export default StaticNavEntry;