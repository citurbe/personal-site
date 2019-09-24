import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/Project"
import PROJECT_DATA from "../data/projects.json"

const projects = props => (
  <Layout>
    {PROJECT_DATA["projects"].map(projectData => (
      <Project project={projectData} />
    ))}
  </Layout>
)

export default projects
