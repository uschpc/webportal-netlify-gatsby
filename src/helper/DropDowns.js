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
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
          <h4>Life is beautiful</h4>         
        </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
      </div>
  </div>
  </div>
  )
};

const ServicesSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('Services');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
        <h4>Life is beautiful</h4>       
        </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
      </div>
  </div>
  </div>
  )
};

const UserInfoSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('User Information');

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
        <h4>Life is beautiful</h4>        
        </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
      </div>
  </div>
  </div>
  )
};

const EducationOutreachSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('Education & Outreach');

   return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>

    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
        <h4>Life is beautiful</h4>         
        </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 3 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
      </div>
  </div>
  </div>
  )
}

const UserSupportSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('User Support');
  if(subNav.sub_nav_items > 0) {
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
        <div className="dropdown-content">  
        <div className="row">
          <div className="column">
            <h4>Life is beautiful</h4>         
          </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 3 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
        </div>
    </div>
      </div>
    );
  } else {
    return ''
  }
}

const NewsEventsSubNavDropdown = ({ current, prev }) => {
  let subNav = assignedDropdownSubNav('News and Events');

  if(subNav) {
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
        <div className="dropdown-content">  
        <div className="row">
          <div className="column">
          <h4>Life is beautiful</h4>       
          </div>
        <div className="column">
          <ul>
          {subNav.sub_nav_items.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.sub_nav_items.length > 3 && (
          <div className="column">
          <div className="links">
          {subNav.sub_nav_items.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Router>
                    <Link className="heading" to={item.path}><h3 className="heading">{item.label}</h3></Link>
                  </Router>
                  </li>
                )
              }
                return ''  
            })
          }
          </div>
        </div>
        )}
        </div>
    </div>
    </div>
    );
  } 
  else {
    return ''
  }

  
}

export { AboutSubNavDropdown, ServicesSubNavDropdown, UserInfoSubNavDropdown, EducationOutreachSubNavDropdown, UserSupportSubNavDropdown, NewsEventsSubNavDropdown };
