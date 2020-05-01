import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import SearchBar from "./search-bar"

const Header = (props) => (
  <header className='header-container'>
    <div className="header-section">
        <div className="content-width-top">
          <div className="usc-info">usc info</div>
        </div>
        <div className="content-width-middile">
          <h1 className='hpc-logo' style={{ margin: 0 }}>
            <Link
              to='/'
              style={{
                color: `white`,
                textDecoration: `none`,
                marginRight: '15px'
              }}
            >
              {props.siteTitle}
            </Link>
          </h1>
          <SearchBar searchData={(e) => props.searchData(e)} />
          </div>
        </div>
        <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
