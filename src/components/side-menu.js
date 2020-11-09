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
    let menuItem = data.parentMenuTitle
    let subMenu = []
    switch (data.content.frontmatter.title) {
      case 'High-Performance Computing':
        subMenu = data.subMenuDG
      break
      case 'Research Computing User Portal':
        subMenu = data.subMenuCF
      break
      case 'Secure Computing':
        subMenu = data.subMenuSC
      break
      case 'Data Management':
        subMenu = data.subMenuDM
        break
      case 'Hybrid Cloud Computing':
        subMenu = data.subMenuCC
        break
      case 'Software and Programming':
        subMenu = data.subMenuSW
        break
      default:
        subMenu = data.subMenu
    }

    if (menuItem === title) {
      return (
        <ul className="submenu-items">
          {subMenu.edges.map ((item, i) => {
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
  console.log(data)
    return (
        <div className="side-menu">
            {data.sideMenu.edges.map((item, i) => {
              console.log(item.node.frontmatter.title === data.parentMenuTitle, item.node.frontmatter.title, data.parentMenuTitle)
                return (
                  !item.node.frontmatter.externalPath ? (
                    !item.node.frontmatter.redirectToPage ? (
                      <ul key={i}>
                          <Link className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title || item.node.frontmatter.title === data.parentMenuTitle ? 'focused' : 'regular'}`} to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                              {item.node.frontmatter.title}
                          </Link>
                          {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                      </ul>
                    ) : (
                      <ul key={i}>
                          <Link className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title || item.node.frontmatter.title === data.parentMenuTitle ? 'focused' : 'regular'}`} to={item.node.frontmatter.redirectToPage}>
                              {item.node.frontmatter.title}
                          </Link>
                          {(item.node.frontmatter.cat !== 'userGuides' || item.node.frontmatter.cat !== 'userSupport' || item.node.frontmatter.cat !== 'navigation') && generateSubMenuItems(item.node.frontmatter.title, data.content && data.content.frontmatter.title, data)}
                      </ul>
                    )
                  ) : (
                    <ul key={i}>
                        <a className={`coldfront-menu-items ${pageTitle === item.node.frontmatter.title || item.node.frontmatter.title === data.parentMenuTitle ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath} target="_blank">
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