import React from 'react';
import { Link } from 'gatsby';

const generateSubMenuLevel2Items = (title, pageTitle, subMenu) => {
    let menuItem = "Research Computing User Portal"
    if (menuItem === title) {
      return (
        <ul className="submenu-items-level-2">
          {subMenu.edges.map ((item, i) => {
          return (
            <li key={i}>
              <Link className={`${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                {item.node.frontmatter.title}
              </Link>
            </li>
          )})}
        </ul>
      )
    } 
    return ''
  } 

const generateSubMenuItems = (title, pageTitle, data) => {
    let menuItem = "High-Performance Computing"
    if (menuItem === title) {
      return (
        <ul className="submenu-items">
          {data.subMenu.edges.map ((item, i) => {
          return (
            <span>
              <li key={i}>
                <Link className={`${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
              {data.subMenuLevel2 && generateSubMenuLevel2Items(item.node.frontmatter.title, data.content.frontmatter.title, data.subMenuLevel2)}
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
                <ul key={i}>
                    <Link className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                        {item.node.frontmatter.title}
                    </Link>
                    {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                </ul>
                )
            })}
         </div>
    )
}

export default SideMenu;