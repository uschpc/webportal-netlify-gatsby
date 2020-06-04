import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import SearchBar from "./search-bar"
import { useScroll } from './custom-hooks/useScroll';


const Header = (props) => {
  console.log('yasee', props.nav);
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
                        <li>Information for:</li>
                        <li>
                          <div className="menu-information-for-container"><ul id="menu-information-for" className="nav-top"><li id="menu-item-84" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84">
                            <a href="https://itservices.usc.edu/">ITS</a></li>
                            <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85">
                              <a href="https://hpcaccount.usc.edu/">ColdFront Resource Allocation System</a></li>
                            <li id="menu-item-13138" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13138"><a href="#">Link 3</a></li>
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
                <img data-src="/images/usc_logo_new_design.svg" className=" lazyloaded" src="/images/usc_logo_new_design.svg" />
              </Link>
              <a href="https://www.usc.edu/">
                <img data-src="/images/usc_logo_new_design.svg" className=" lazyloaded" src={(width > 570) ? '/images/USC-Shield.png' : '/images/usc-shield-only.png' } />
              </a>
              </div>
          </div>
          <Navbar width={width} scrollY={scrollY} nav={props.nav} />
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
