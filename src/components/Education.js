import React from "react"

const school = schoolData => (
  <div>
    {schoolData.institution}, {schoolData.location} - {schoolData.degree} -{" "}
    {schoolData.date}
  </div>
)

const Education = props => {
  return (
    <div>
      <p>EDUCATION:</p>
      {props.education.reverse().map(item => school(item))}
    </div>
  )
}

export default Education
