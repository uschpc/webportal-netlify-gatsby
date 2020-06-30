import React from 'react';
import { Link } from 'gatsby';

const findSubMenu = (menubar, nav) => {
    const subNav = nav.edges.filter((ele, i) => {
        return (ele.node.frontmatter.parentEle === menubar)
        });
    return subNav ? subNav : null;
}

const UserGuideSideMenu = ({content, sideMenu}) => { 
    let subMenu = findSubMenu('User Information', sideMenu)
    return (
        <span>
            {subMenu.map((item, i) => {
            return (
                !item.node.frontmatter.externalPath ? (
                    !item.node.frontmatter.redirectToPage ? (
                        <div className="side-menu" key={i}>
                            <ul>
                                <Link className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                                    {item.node.frontmatter.title}
                                </Link>
                            </ul>
                        </div>
                    ) : (
                        <div className="side-menu" key={i}>
                            <ul>
                                <Link className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.redirectToPage}>
                                    {item.node.frontmatter.title}
                                </Link>
                            </ul>
                        </div>
                    )
                ) : (
                    <div className="side-menu" key={i}>
                        <ul>
                            <a className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath} target="_blank">
                                {item.node.frontmatter.title}
                            </a>
                        </ul>
                    </div>
                )
                )
            })}
        </span>
    )
}

export default UserGuideSideMenu;