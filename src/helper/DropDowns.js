import React from "react";
// import { BrowserRouter as Router, Link} from "react-router-dom"
import { Link } from "gatsby"

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
          <h4>
            The CARC provides high-performance computing resources to the USC research community.
          </h4>
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li key={i}>
                  <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                </li>
                )}
              }
            )
          }
        </ul>
        </div>
        <div className="column">
          {subNav.length > 4 && (

            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )
                }
                  return ''
              })
            }
            </div>
          )}
        </div>
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
        <h4>
          The variety of services offered by the CARC support USC's research endeavors.
        </h4>
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                item.node.frontmatter.redirectToPage ? (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.redirectToPage}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                ) : (
                  <li key={i}>
                      <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )
                )}
              }
            )
          }
        </ul>
        </div>
        <div className="column">
          {subNav.length > 4 && (

            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )
                }
                  return ''
              })
            }
            </div>
          )}
        </div>
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
        <h4>
          The CARC strives to provide a complete and comprehensive user support experience.
        </h4>
        </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                !item.node.frontmatter.externalPath ? (
                  item.node.frontmatter.redirectToPage ? (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.redirectToPage}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                ) : (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                  )
                ) : (
                  <li key={i}>
                    <a className="heading" href={item.node.frontmatter.externalPath} target="_blank"><h3 className="heading">{item.node.frontmatter.title}</h3></a>
                  </li>
                )
                )}
              }
            )
          }
        </ul>
        </div>
        <div className="column">
          {subNav.length > 4 && (
            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  !item.node.frontmatter.externalPath ? (
                    item.node.frontmatter.redirectToPage ? (
                      <li key={i}>
                        <Link className="heading" to={item.node.frontmatter.redirectToPage}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                        </li>
                    ) : (
                      <li key={i}>
                        <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                      </li>
                    )
                  ) : (
                    <li key={i}>
                      <a className="heading" href={item.node.frontmatter.externalPath} target="_blank"><h3 className="heading">{item.node.frontmatter.title}</h3></a>
                    </li>
                  )
                  )}
                  return ''
              })
            }
            </div>
          )}
        </div>
      </div>
  </div>
  </div>
  )
};

const EducationOutreachSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('Education & Outreach', nav);
    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>

      <div className="dropdown-content">
        <div className="row">
          <div className="column">
          <h4>
            Supporting USC students and faculty in their computational research is the key mission of the CARC.
          </h4>
          </div>
          <div className="column">
            <ul>
            {subNav.map((item, i) => {
               if (i <= 3) {
                return (
                  <li key={i}>
                      <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )}
                }
              )
            }
          </ul>
          </div>
          <div className="column">
          {subNav.length > 4 && (
            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )
                }
                  return ''
              })
            }
            </div>
          )}
        </div>
        </div>
    </div>
    </div>
    )
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
                <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        <div className="column">
          {subNav.length > 4 && (
            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )
                }
                  return ''
              })
            }
            </div>
          )}
        </div>
        </div>
    </div>
      </div>
    );
  } else {
    return ''
  }
}

const NewsEventsSubNavDropdown = ({ current, prev, nav }) => {
  let subNav = assignedDropdownSubNav('News & Events', nav);

    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
        <div className="dropdown-content">
        <div className="row">
          <div className="column">
          <h4>
            Find out how the CARC has been getting involved with the Trojan community and beyond.
          </h4>
          </div>
        <div className="column">
          <ul>
          {subNav.map((item, i) => {
             if (i <= 3) {
              return (
                <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                  </li>
                )}
              }
            )
          }
        </ul>
        </div>
        <div className="column">
          {subNav.length > 4 && (

            <div className="links">
            {subNav.map((item, i) => {
              if (i > 3) {
                return (
                  <li key={i}>
                    <Link className="heading" to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}><h3 className="heading">{item.node.frontmatter.title}</h3></Link>
                    </li>
                  )
                }
                  return ''
              })
            }
            </div>
          )}
        </div>
        </div>
    </div>
    </div>
    );
}

export { AboutSubNavDropdown, ServicesSubNavDropdown, UserInfoSubNavDropdown, EducationOutreachSubNavDropdown, UserSupportSubNavDropdown, NewsEventsSubNavDropdown };
