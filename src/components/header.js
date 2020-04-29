import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, navigation }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        {navigation.map((nav, i) => {
          return <Link
          to={nav.path}
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '15px'
          }}
          key={i}
        >
           {nav.path === '/' ? siteTitle : nav.label}
        </Link>
        })}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
