import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import SearchBar from "./search-bar"

const Header = (props) => (
  <header className='header-container'>
    <div className="header-section">
        <div className="content-width-top">
          <div class="top-bar clearfix">
            <div class="container">
              <div class="row">
                <div class="col-xs-6">
                  <div class="tb-col-1">
                    <ul>
                      <li>Information for:</li>
                      <li>
                        <div class="menu-information-for-container"><ul id="menu-information-for" class="nav-top"><li id="menu-item-84" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-84"><a href="#">link 1</a></li>
                          <li id="menu-item-85" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-85"><a href="#">Link 2</a></li>
                          <li id="menu-item-13138" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13138"><a href="#">Link 3</a></li>
                          <li id="menu-item-149" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-149"><a href="#">Link 4</a></li>
                          <li id="menu-item-12036" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12036"><a href="#">Link 5</a></li>
                          </ul></div>							</li>	
                    </ul>
                  </div>
                </div>

                <div class="col-xs-6">
                  <div class="tb-col-2">
                  <SearchBar searchData={(e) => props.searchData(e)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="header-section second-section">
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
            <a href="http://usc.edu/" target="_blank"><img data-src="/images/usc_logo.svg" class=" lazyloaded" src="/images/usc_logo.svg" /></a>
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
