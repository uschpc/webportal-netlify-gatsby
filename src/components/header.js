import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import SearchBar from "./search-bar"
import { useScroll } from './custom-hooks/useScroll'

const Header = (props) => {
  const { scrollY, width } = useScroll();

  return (
    <header className='header-container'>
      <div className="header-section">
          <div className="content-width-top">
            <div className="top-bar clearfix">
              <div className="container">
                <div className="row">
                  <div className="col-xs-6">
                    <div className="tb-col-1">
                      <ul>
                        <li>
                          <div className="menu-information-for-container"><ul id="menu-information-for" className="nav-top"><li id="menu-item-84" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84">
                            <a href="https://usc.edu/">USC</a></li>
                            <li id="menu-item-84" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84">
                            <a href="https://itservices.usc.edu/">USC ITS</a></li>
                            <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85">
                              <a href="https://cio.usc.edu/">Office of the CIO</a></li>
                            <li id="menu-item-13138" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13138"><a href="https://trojansecure.usc.edu/">Office of the CISO</a></li>
                            </ul></div>							</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-xs-6">
                    <div className="tb-col-2">
                    <SearchBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="header-section second-section">
            <div className="content-width-middile">
              <Link to="/" className="hpc-logo">
                {/* <img data-src="/images/usc_logo_new_design.svg" className=" lazyloaded" src="/images/usc_logo_new_design.svg" /> */}
                <img data-src="/images/NewLogo.png" className="main-logo" src="/images/NewLogo.png" alt="USC Center for Advanced Research Computing Logo" />
              </Link>
              {/* <a href="https://www.usc.edu/">
                <img data-src="/images/usc-primary-shield_black.png" className=" lazyloaded" src={(width > 570) ? '/images/usc-primary-shield_black.png' : '/images/shield_black.png' } />
              </a> */}
              </div>
          </div>
          <Navbar width={width} scrollY={scrollY} nav={props.nav} uniqId={props.uniqId} backToTopBtnFlag={props.backToTopBtnFlag} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
