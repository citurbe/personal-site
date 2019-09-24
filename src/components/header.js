import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#caebf2`,
      marginBottom: `1.45rem`,
      height: `70px`,
    }}
  >
    <div
      style={{
        width: `40%`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `inline-block`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#A9A9A9`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
