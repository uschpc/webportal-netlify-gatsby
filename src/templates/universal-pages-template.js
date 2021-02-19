import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
// import MenuRoute from '../components/menu-route'


const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

const findLinks = (type, data) => {
  type = type ? type.toLowerCase() : ''
  switch(type) {
    case 'about':
      return data[type]
    case 'services':
      return data[type]
    case 'userInformation':
      return data[type]
    case 'educationAndOutreach':
      return data[type]
    case 'newsAndEvents':
      return data[type]
    default: 
    return []
  }
}

export default function Template({ data }) {
    let content = data.universalPages
    let subMenu = findSubMenu(content.frontmatter.sideMenuTitle, data.sideMenu)
    console.log(123123)
    let links = findLinks(content.frontmatter.sideMenuTitle, data)
    console.log(links)
    return (
      <Layout {...data.navigation}>
          <SEO title={content.frontmatter.title}/>
          <div className="coldFront-parent-container universal-pages">
              <div className="page-body">
                <div className="left-column">
                  <div className="position-fixed">
                      <h2 className="universal">{content.frontmatter.title}</h2>
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
                              <a className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath}>
                                  {item.node.frontmatter.title}
                              </a>
                          </ul>
                        </div>
                      ))
                  })}
                  </div>
                </div>
                <div className="middle-column universal">
                  <h1>{data.universalPages.frontmatter.title}</h1>
                  <Markdown source={data.universalPages.html} escapeHtml={false} />
                    {links && links.edges && links.edges.map((item, i) => {
                      return (
                        <span>
                          <Link key={i} className="coldfront-menu-items" to={item.node.frontmatter.redirectToPage}>
                              {item.node.frontmatter.title}
                          </Link>
                          <Markdown source={item.node.html} escapeHtml={false} />
                        </span>
                        )
                    })}
                </div>
                <div className="right-column hide">
                  <div className="system-status">
                      <h4>Related Links</h4>
                      <h5>Some links</h5>
                      <h5>Some links</h5>
                      <h5>Some links</h5>
                  </div>
                </div>
              </div>
          </div>
          <Footer />
      </Layout>
    )
}

export const universalPages = graphql`
  query($slug: String!) {
    md: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
          }
          html
        }
      }
    }
    universalPages: markdownRemark(frontmatter: {cat: {eq: "universalPages"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        cat
        sideMenuTitle
      }
      html
    }
    about: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "aboutLinks"}}}) {
      edges {
        node {
          frontmatter {
            title
            redirectToPage
          }
          html
        }
      } 
    }
    services: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "servicesLinks"}}}) {
      edges {
        node {
          frontmatter {
            title
            redirectToPage
          }
          html
        }
      } 
    }
    userInformation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userInformationLinks"}}}) {
      edges {
        node {
          frontmatter {
            title
            redirectToPage
          }
          html
        }
      } 
    }
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentEle
            parentPath
            externalPath
            redirectToPage
          }
        }
      }
    }
    subMenu: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "sharedTemplate"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
          }
        }
      }
    }
    content: markdownRemark(frontmatter: {cat: {eq: "sharedTemplate"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
        route
        routePath
      }
      html
    }
    routes: allMarkdownRemark(filter: {frontmatter: {routeCat: {eq: "route"}}}, sort: {fields: frontmatter___id}) {
      edges {
        node {
          id
          frontmatter {
            path
            route
            routePath
          }
        }
      }
    }
    navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            parentPath
            title
            parentEle
            externalPath
            redirectToPage
          }
        }
      }
    }
  }
`
