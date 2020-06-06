import React from 'react';
import { Link } from 'gatsby';

const generateSubMenuItems = (title, pageTitle, subMenu) => {
    let menuItem = "High-Performance Computing"
    if (menuItem === title) {
      return (
        <ul className="submenu-items">
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

const SideMenu = (data) => {
    return (
        <div className="side-menu">
            {data.sideMenu.edges.map ((item, i) => {
                return (
                <ul key={i}>
                    <Link className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                        {item.node.frontmatter.title}
                    </Link>
                    {generateSubMenuItems(item.node.frontmatter.title, data.content.frontmatter.title, data.subMenu)}
                </ul>
                )
            })}
         </div>
    )
}

export default SideMenu;