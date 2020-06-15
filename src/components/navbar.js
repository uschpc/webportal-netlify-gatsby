import React from "react"
import { AboutSubNavDropdown, ServicesSubNavDropdown, UserInfoSubNavDropdown, EducationOutreachSubNavDropdown, UserSupportSubNavDropdown, NewsEventsSubNavDropdown } from "../helper/DropDowns";
import DropDownsContainer from "../helper/DropDownsContainer";
import navlist from "../navigations.json";

import "../mainStyle.scss";
import { Link } from "gatsby";

const assignedDropdownSubNav = (menubar, nav) => {
  let subNav = nav.filter((ele, i) => {
    if (ele.node.frontmatter.parentEle === menubar) {
      return ele.node.frontmatter;
    }
  });
  return subNav;
}

const navigation = [
  {
    title: "About",
    dropdown: AboutSubNavDropdown
  },
  {
    title: "Services",
    dropdown: ServicesSubNavDropdown
  },
  {
    title: "User Information", 
    dropdown: UserInfoSubNavDropdown
 },
 {
    title: "Education & Outreach", 
    path: "education_and_outreach",
    dropdown: EducationOutreachSubNavDropdown
 },
 {
   title: "News and Events",
   path: "news_and_events",
   dropdown: NewsEventsSubNavDropdown
 },
 {
  title: "User Support", 
  path: "user-support",
  dropdown: UserSupportSubNavDropdown
}
];

// var activeNavigation = navigation.filter((e, i) => e.title === navlist.nav_items[i].label);
var activeNavigation = navigation;

class Navbar extends React.Component {
  state = {
    activeIndices: [],
    closeNavIcon: false,
    openNavIcon: true,
    nav: this.props.nav,
    subNav: {
      "About": [],
      "Services": [],
      "User Information": []
    },
    signflag: {
      "About": '+',
      "Services": '+',
      "User Information": '+'
    },
    subNavFlag: {
      "About": false,
      "Services": false,
      "User Information": false
    },
    openSearchIcon: false
  };

  onMouseEnter = event => {
    const currentIndex = Number(event.currentTarget.dataset.index);
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === currentIndex) return;
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(currentIndex)
    }));
  };

  onMouseLeave = () => {
    this.setState({
      activeIndices: []
    });
  };

  openNav = () => {
    this.setState({
      closeNavIcon: true,
      openNavIcon: false
    })
  }

  closeNav = () => {
    this.setState({
      openNavIcon: true,
      closeNavIcon: false
    })
    this.resetState();
  }

  openSearchNav = () => {
    this.setState({
      openSearchIcon: true,
    })
  }


  closeSearchNav = () => {
    this.setState({
      openSearchIcon: false,
    })
  }

  resetState = () => {
    this.setState({
      subNav: {
        "About": [],
        "Services": [],
        "User Information": []
      },
      signflag: {
        "About": '+',
        "Services": '+',
        "User Information": '+'
      },
    })
  }

  openSubMenu = (item) => {
    let nav = this.state.nav;
    let subNav = assignedDropdownSubNav(item, nav);
    setTimeout(() => {
      this.setState({
        subNav: {
          ...this.state.subNav,
          [item]: subNav
        },
        signflag: {
          ...this.state.signflag,
          [item]: this.state.signflag[item] === '-' ? '+' : '-'
        },
        subNavFlag: {
          ...this.state.subNavFlag,
          [item]: this.state.subNavFlag[item] ? false : true
        }
      })
    }, 0)
  }

  render() {
    let CurrentDropdown;
    let PreviousDropdown;

    const previousIndex = this.state.activeIndices[this.state.activeIndices.length - 2];
    const currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

    if (typeof currentIndex === "number") {
      CurrentDropdown = activeNavigation[currentIndex].dropdown;
    }

    if (typeof previousIndex === "number") {
      PreviousDropdown = activeNavigation[previousIndex].dropdown;
    }

    return (
      <div className={`app-container ${(this.props.scrollY >= 124 && window.scrollY > 10) ? 'fixed' : 'default' } `}>
        <nav className="navbar-el" onMouseLeave={this.onMouseLeave}>
          {/* <img data-src="/images/usc_logo_new_design_small.svg" className={`small-logo ${(this.props.width >= 1695 && this.props.scrollY >= 124 && window.scrollY > 10) ? 'show' : 'hide' } `} src="/images/usc_logo_new_design_small.svg" /> */}
          {/* <img className={`small-logo right ${(this.props.width >= 1150 &&  this.props.scrollY >= 124 && window.scrollY > 10) ? 'show' : 'hide' } `} src="/images/shield_black.png" /> */}
          <ul className="navbar-list">
            {activeNavigation.map((n, index) => {
              return (
                <div
                  className=""
                  onMouseEnter={this.onMouseEnter}
                  onFocus={this.onMouseEnter}
                  data-index={index}
                  key={index}
                >
                  <div className="navbar">
                    <div className="dropdown">
                    <button className={`dropbtn ${n.title === "User Support" ? 'last-element' : ''} `}>
                    {
                      n.title === "User Support" ? (
                        <Link to={n.path}>{n.title}</Link>
                      ) : (
                        n.title
                      )
                    }
                  </button>
                  <div className="">
                    {(currentIndex === index) && (
                        <DropDownsContainer preventDistortion="[data-prevent-distortion]" >
                          <div
                            data-prevent-distortion
                            data-transform-origin="left bottom"
                          />
                          <div className="">
                            {PreviousDropdown && <PreviousDropdown prev nav={this.props.nav} />}
                            <CurrentDropdown current nav={this.props.nav} />
                          </div>
                        </DropDownsContainer>
                    )}
                  </div>
                </div>
                </div>
                </div>
              );
            })}

          </ul>
        </nav>
        <nav className="mobile-nav">
          <div className="btn-wrap">
            <button className={`openbtn ${this.state.openNavIcon ? 'show' : 'hide'}`} onClick={() => this.openNav()}>☰</button>  
            <button className={`openbtn ${this.state.closeNavIcon ? 'show' : 'hide'}`} onClick={()=> this.closeNav()}>X</button>  
            <button className={`search__toggle__icon ${this.state.openSearchIcon ? 'hide' : 'show'}`} onClick={() => this.openSearchNav()}>
              <img src="/images/white-magnifying-glass.png" />
            </button>
            <button className={`search__toggle__icon ${this.state.openSearchIcon ? 'show' : 'hide'}`} onClick={() => this.closeSearchNav()}>
              X
            </button>
          </div>

          <div className={`search-menu-item ${this.state.openSearchIcon ? 'show' : 'hide' }`} >
          <div className="search">
              <form action="/search-results">
                  <label className="hide" htmlFor="search">Search</label>
                  <input type="text" className="search__input" name="q" id="search" placeholder="Search hpc.usc.edu" />
                  <button type="submit" className="button button--solid">Search</button>
                </form>
              </div>
          </div>
         
          <div className={`menu-item ${this.state.closeNavIcon ? 'show' : 'hide' }`}>
            {activeNavigation.map((n, index) => {
                return (
                  <div
                    data-index={index}
                    key={index}
                  >
                  <ul>
                    <li onClick={() => this.openSubMenu(n.title)} className={this.state.signflag[n.title] === '-' ? 'activeState' : 'non-active'}>
                      <span>
                        <span className="title">{n.title}</span>
                        <span className="pluse">{this.state.signflag[n.title]}</span>
                      </span>
                      <span className={`sub-menu-item ${this.state.subNavFlag[n.title] ? 'show' : 'hide' }`}>
                        {this.state.subNav[n.title] && this.state.subNav[n.title].map((item, i) => {
                            return (
                              <ul>
                                <Link to={item.node.frontmatter.path} key={i}>
                                  {item.node.frontmatter.title}
                                </Link>
                            </ul>
                            )
                          })
                        }
                      </span>
                    </li>
                  </ul>
                  </div>
                )})}
            </div>
        </nav>
      </div>
    );
  }
}


export default Navbar