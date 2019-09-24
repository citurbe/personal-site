import React from "react"

const Project = props => (
  <div className="row project">
    <div className="four columns">{props.project.name}</div>
    <div className="eight columns">
      <div className="row">{props.project.description}</div>
      <div className="row">
        <a target="blank" href={props.project.demo}>
          demo
        </a>
        <a target="blank" href={props.project.demo}>
          code
        </a>
      </div>
    </div>
  </div>
)

export default Project
