import React from "react"
import { AboutSubNavDropdown, ServicesSubNavDropdown, UserInfoSubNavDropdown, EducationOutreachSubNavDropdown, UserSupportSubNavDropdown, NewsEventsSubNavDropdown } from "../helper/DropDowns";
import DropDownsContainer from "../helper/DropDownsContainer";
import navlist from "../navigations.json";


import "../nav.scss";

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
    dropdown: EducationOutreachSubNavDropdown
 },
 {
   title: "News and Events",
   dropdown: NewsEventsSubNavDropdown
 },
 {
  title: "User Support", 
  dropdown: UserSupportSubNavDropdown
}
];

var activeNavigation = navigation.filter((e, i) => e.title === navlist.nav_items[i].label);

class Navbar extends React.Component {
  state = {
    activeIndices: []
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
          <img data-src="/images/usc_logo_new_design_small.svg" className={`small-logo ${(this.props.scrollY >= 124 && window.scrollY > 10) ? 'show' : 'hide' } `} src="/images/usc_logo_new_design_small.svg" />
          <img className={`small-logo right ${(this.props.scrollY >= 124 && window.scrollY > 10) ? 'show' : 'hide' } `} src="/images/usc-shield-only.png" />
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
                    <button className={`dropbtn ${n.title === "User Support" ? 'last-element' : ''} `}>{n.title}</button>
                  <div className="">
                    {currentIndex === index && (
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
      </div>
    );
  }
}


export default Navbar