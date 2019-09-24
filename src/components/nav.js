import React from "react"
import { Link } from "gatsby"

const nav = () => {
  return (
    <div
      style={{
        display: `inline-block`,
        marginLeft: `20%`,
        width: `40%`,
        color: `#ff383f`,
      }}
    >
      <Link to="/" className="nav">
        Hello
      </Link>
      <Link to="/projects" className="nav">
        Projects
      </Link>
      <Link to="/resume" className="nav">
        Resume
      </Link>
    </div>
  )
}

export default nav
