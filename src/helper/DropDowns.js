import React from "react";
import { BrowserRouter as Router} from "react-router-dom"
import { Link } from "react-router-dom"
import navlist from "../navigations.json";

const assignedDropdownSubNav = (menubar) => {
  let subNav = navlist.nav_items.filter((ele, i) => {
    if (ele.label === menubar) {
      return navlist.nav_items[i].sub_nav_items;
    }
  });
  return subNav[0];
}

const AboutSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('About');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            {subNav.sub_nav_items.map((item, i) => {
              return (
              <li key={i}>
                <Router>
                  <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                </Router>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('Services');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            {subNav.sub_nav_items.map((item, i) => {
                return (
                <li key={i}>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const UserInfoSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('User Information');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            {subNav.sub_nav_items.map((item, i) => {
              return (
              <li key={i}>
                <Router>
                  <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                </Router>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const EducationOutreachSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('Education & Outreach');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            {subNav.sub_nav_items.map((item, i) => {
              return (
              <li key={i}>
                <Router>
                  <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                </Router>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const UserSupportSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('User Support');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            {subNav.sub_nav_items.map((item, i) => {
              return (
              <li key={i}>
                <Router>
              <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                </Router>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { AboutSubNavDropdown, ServicesSubNavDropdown, UserInfoSubNavDropdown, EducationOutreachSubNavDropdown, UserSupportSubNavDropdown };