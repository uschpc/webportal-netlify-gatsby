import React from 'react';
import { Link } from 'gatsby';

const generateSubMenuLevel2Items = (sideMenuTitle, sideMenuParent, title, subMenu) => {
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
    let menuItem = data.parentMenuTitle

    if (menuItem === title) {
      return (
        <ul className="submenu-items">
          {data.subMenu.edges.map((item, i) => {
          return (
            <span key={i}>
              <li>
                <Link className={`${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
              {data.subMenuLevel2 && generateSubMenuLevel2Items(item.node.frontmatter.title, data.sideMenuParent, data.title, data.subMenuLevel2)}
            </span>
          )})}
        </ul>
      )
    } 
    return ''
  } 

const NavigationSideMenu = (data) => {
    return (
        <div className="side-menu">
            {data.sideMenu.map((item, i) => {
                return (
                  !item.node.frontmatter.externalPath ? (
                    !item.node.frontmatter.redirectToPage ? (
                      <ul key={i}>
                          <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                              {item.node.frontmatter.title}
                          </Link>
                          {generateSubMenuItems(item.node.frontmatter.title, data.title, data)}
                      </ul>
                    ) : (
                      <ul key={i}>
                          <Link to={item.node.frontmatter.redirectToPage}>
                              {item.node.frontmatter.title}
                          </Link>
                          {generateSubMenuItems(item.node.frontmatter.title, data.title, data)}
                      </ul>
                    )
                  ) : (
                    <ul key={i}>
                        <a href={item.node.frontmatter.externalPath} target="_blank">
                            {item.node.frontmatter.title}
                        </a>
                        {generateSubMenuItems(item.node.frontmatter.title, data.title, data)}
                    </ul>
                  )
                )
            })}
         </div>
    )
}

export default NavigationSideMenu;