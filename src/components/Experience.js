import React from "react"

const job = data => (
  <div>
    <p>
      <strong>
        {data.title}, {data.company}
      </strong>{" "}
      - <em>{data.dates}</em> - {data.location}
    </p>
    <ul>
      {data.responsibilities.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
)

const other = (title, data) => (
  <div>
    <p>{title}:</p>
    <ul>
      {data.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
)

const Experience = props => {
  return (
    <div>
      <p>RECENT EXPERIENCE:</p>
      {props.recent.map(jobData => job(jobData))}
      {other("PREVIOUS EXPERIENCE", props.previous)}
      {other("VOLUNTEER EXPERIENCE", props.volunteer)}
    </div>
  )
}

export default Experience
