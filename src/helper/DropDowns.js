import React from "react";
// import { BrowserRouter as Router, Link} from "react-router-dom"
import { Link } from "gatsby"
import navlist from "../navigations.json";

const assignedDropdownSubNav = (menubar, nav) => {
  let subNav = nav.filter((ele, i) => {
    if (ele.node.frontmatter.parentEle === menubar) {
      return ele.node.frontmatter;
    }
  });
  return subNav;
}

const AboutSubNavDropdown = ({ current, prev, nav}) => {
  let subNav = assignedDropdownSubNav('About', nav);

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
          <h4>Life is beautiful</h4>         
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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

const ServicesSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('Services', nav);

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
        <h4>Life is beautiful</h4>       
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                  <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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

const UserInfoSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('User Information', nav);

  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
    <div className="dropdown-content">  
      <div className="row">
        <div className="column">
        <h4>Life is beautiful</h4>        
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                  <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.length > 4 && (
          <div className="column">
          <div className="links">
          {subNav.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                    <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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

const EducationOutreachSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('Education & Outreach', nav);
  if (subNav.length > 0) {
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
  
      <div className="dropdown-content">  
        <div className="row">
          <div className="column">
          <h4>Life is beautiful</h4>         
          </div>
          <div className="column">
            <ul>
            {subNav.map((item, i) => {
               if (i <= 3) {
                return (
                  <li>
                      <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )}
                }
              )
            }
          </ul>
          </div>
          {subNav.length > 3 && (
            <div className="column">
            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li>
                      <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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
  return '';
}

const UserSupportSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('User Support', nav);
  if(subNav > 0) {
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
        <div className="dropdown-content">  
        <div className="row">
          <div className="column">
            <h4>Life is beautiful</h4>         
          </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                    <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.length > 3 && (
          <div className="column">
          <div className="links">
          {subNav.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                    <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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

const NewsEventsSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('News and Events', nav);

  if(subNav.length > 0) {
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
        <div className="dropdown-content">  
        <div className="row">
          <div className="column">
          <h4>Life is beautiful</h4>       
          </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li>
                    <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        {subNav.length > 3 && (
          <div className="column">
          <div className="links">
          {subNav.map((item, i) => {
            if (i > 3) {
              return (
                <li>
                    <Link className="heading" to={`/${item.node.frontmatter.path}`}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
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
