import React from 'react';
import { Link } from 'gatsby';

const generateSubMenuLevel2Items = (sideMenuTitle, pageTitle, subMenu) => {
  const { sideMenuParent, title } = pageTitle
    if (sideMenuParent === sideMenuTitle) {
      return (
        <ul className="submenu-items-level-2">
          {subMenu.edges.map ((item, i) => {
          return (
            !item.node.frontmatter.externalPath ? (
              !item.node.frontmatter.redirectToPage ? (
                <li key={i}>
                  <Link className={`${title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                    {item.node.frontmatter.title}
                  </Link>
                </li>
              ) : (
                <li key={i}>
                  <Link className={`${title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.redirectToPage}>
                    {item.node.frontmatter.title}
                  </Link>
                </li>
              )
            ) : (
              <li key={i}>
                <a className={`${title === item.node.frontmatter.title ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath} target="_blank">
                  {item.node.frontmatter.title}
                </a>
              </li>
            )
            
          )})}
        </ul>
      )
    } 
    return ''
  } 

const generateSubMenuItems = (title, pageTitle, data) => {
    let menuItem = data.parentMenuTitle || "High-Performance Computing"
    console.log("sub menu land", menuItem === title, data.subMenu)

    // let menuItem = data.content.frontmatter.sideMenuParent || "High-Performance Computing"
    if (menuItem === title) {
      return (
        <ul className="submenu-items">
          {data.subMenu.edges.map ((item, i) => {
          return (
            <span key={i}>
              <li>
                <Link className={`${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
              {data.subMenuLevel2 && generateSubMenuLevel2Items(item.node.frontmatter.title, data.content.frontmatter, data.subMenuLevel2)}
            </span>
          )})}
        </ul>
      )
    } 
    return ''
  } 

const SideMenu = (data) => {
  let pageTitle = data.mainPage ? data.mainPage.frontmatter.title : data.content.frontmatter.title;
    return (
        <div className="side-menu">
            {data.sideMenu.edges.map((item, i) => {
                return (
                  !item.node.frontmatter.externalPath ? (
                    !item.node.frontmatter.redirectToPage ? (
                      <ul key={i}>
                          <Link className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                              {item.node.frontmatter.title}
                          </Link>
                          {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                      </ul>
                    ) : (
                      <ul key={i}>
                          <Link className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.redirectToPage}>
                              {item.node.frontmatter.title}
                          </Link>
                          {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                      </ul>
                    )
                  ) : (
                    <ul key={i}>
                        <a className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath} target="_blank">
                            {item.node.frontmatter.title}
                        </a>
                        {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                    </ul>
                  )
                )
            })}
         </div>
    )
}

export default SideMenu;