import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Markdown from "react-markdown"
import Footer from '../components/footer'
import SideMenu from '../components/side-menu'
// import Content from '../components/content'
import { useScroll } from '../components/custom-hooks/useScroll'

export default function Template({ data }) {
    const { scrollY } = useScroll();
    const [scrollPositionFlag, setPositionFlag] = useState(false)
    const post = data.content;
    const discovery = data.discovery.edges;
    const coldFront = data.md.edges;
    console.log('asdasdasd2020', post)

    let subMenu = []

    const items = data.content.frontmatter.uniqID === "software" ? data.Software.edges : data.dataManagement.edges
    useEffect(() => {
      if (scrollY >= 240) setPositionFlag(true)
      else setPositionFlag(false)
    }, [scrollY])
    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
          <div className="user-guides-pages">
          <div className="container">
              <div className="left-column">
                <div className={`position-fixed ${(scrollPositionFlag) ? 'start' : 'reset'}`}>
                  <Link to="/user-information/user-guides"><h2>User Guides</h2></Link>
                  <SideMenu {...data} parentMenuTitle={post.frontmatter.title} />
                </div>
              </div>
              <div className="middle-column">
                  <h1>{post.frontmatter.title}</h1>
                  {(post.frontmatter.uniqID === "user_portal") && (
                    <div className="login">
                      <a href="https://hpcaccount.usc.edu/" className="btn login-to-user-portal" target="_blank">
                        <span className="txt">Log in to Portal</span>
                        <span className="round"><i className="fa fa-chevron-right"></i></span>
                      </a>
                   </div>
                  )}
                  <Markdown source={post.html} escapeHtml={false} />
                  {(post.frontmatter.title === "High-Performance Computing") && (
                        <span>
                          <h3>User Guides</h3>
                          {discovery.map ((item, i) => {
                            return (
                              <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                                  <li>{item.node.frontmatter.title}</li>
                              </Link>
                              )
                          })}
                        </span>
                      )}
                   {(data.content.frontmatter.title === "Data Management") && (
                    <span>
                      <h3>User Guides</h3>
                      {items.map ((item, i) => {
                        return (
                          <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                              <li>{item.node.frontmatter.title}</li>
                          </Link>
                          )
                      })}
                    </span>
                  )}
                   {(data.content.frontmatter.title === "Software and Programming") && (
                    <span>
                      <h3>User Guides</h3>
                      {items.map ((item, i) => {
                        return (
                          <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                              <li>{item.node.frontmatter.alternativeTitle}</li>
                          </Link>
                          )
                      })}
                    </span>
                  )}
                   {(data.content.frontmatter.title === "Hybrid Cloud Computing") && (
                    <span>
                      <h3>User Guides</h3>
                      {data.cloudComputing.edges.map ((item, i) => {
                        return (
                          <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                              <li>{item.node.frontmatter.title}</li>
                          </Link>
                          )
                      })}
                    </span>
                  )}
                  {(data.content.frontmatter.title === "Secure Computing") && (
                   <span>
                     <h3>User Guides</h3>
                     {data.secureComputing.edges.map ((item, i) => {
                       return (
                         <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                             <li>{item.node.frontmatter.title}</li>
                         </Link>
                         )
                     })}
                   </span>
                 )}
                  {(data.content.frontmatter.uniqID === "user_portal") && (
                    <span>
                      <h3>User Guides</h3>
                      {coldFront.map ((item, i) => {
                        return (
                          <Link key={i} className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                              <li>{item.node.frontmatter.title}</li>
                          </Link>
                          )
                      })}
                    </span>
                  )}
              </div>
              <div className="right-column">
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

export const coldFrontQuery = graphql`
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
    content: markdownRemark(frontmatter: {cat: {eq: "userGuides"}, path: {eq: $slug}}) {
        frontmatter {
          title
          path
          parentPath
          cat
          uniqID
        }
        html
      }
      dataManagement: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "dataManagement"}}}) {
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
      discovery: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "discoveryGuides"}}}) {
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
      Software: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "software"}}}) {
        edges {
          node {
            frontmatter {
              alternativeTitle
              path
              parentPath
              cat
            }
            html
          }
        }
      }
      cloudComputing: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "cloudComputing"}}}) {
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
      secureComputing: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "secureComputing"}}}) {
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
    allContent: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "sharedTemplate"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
            excerpt
          }
          html
        }
      }
    }
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "userGuides"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
            externalPath
            redirectToPage
          }
        }
      }
    }
    subMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
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
    subMenuCF: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
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
    subMenuDG: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "discoveryGuides"}}}) {
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
    subMenuCC: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "cloudComputing"}}}) {
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
    subMenuSC: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "secureComputing"}}}) {
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
    subMenuSW: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "software"}}}) {
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
    subMenuDM: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "dataManagement"}}}) {
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
    navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            parentPath
            title
            parentEle
            parentPath
            externalPath
            redirectToPage
          }
        }
      }
    }
  }
`
