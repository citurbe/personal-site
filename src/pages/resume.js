import React from "react"
import Layout from "../components/layout"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Education from "../components/Education"
import RESUME_DATA from "../data/resume.json"

const resume = props => (
  <Layout>
    <Skills skills={RESUME_DATA["technical skills"]} />
    <Experience
      recent={RESUME_DATA["recent experience"]}
      previous={RESUME_DATA["other experience"]}
      volunteer={RESUME_DATA["volunteer experience"]}
    />
    <Education education={RESUME_DATA["education"]} />
  </Layout>
)

export default resume
