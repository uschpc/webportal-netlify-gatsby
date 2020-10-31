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
    console.log('scrollY', scrollY)
    const post = data.content;
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
                  <SideMenu {...data}/>
                </div>
              </div>
              <div className="middle-column">
                  <h1>{post.frontmatter.title}</h1>
                  <Markdown source={post.html} escapeHtml={false} />
                  {(post.frontmatter.title === 'High-Performance Computing') && data.allContent.edges.map((item, i) => {
                    return (
                      <span key={i}>
                        <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                            <div className="user-support-box">
                                <p className="title">{item.node.frontmatter.title}</p>
                            </div>
                        </Link>
                        <p className="description">{item.node.frontmatter.excerpt}</p>
                      </span>
                    )
                  })}
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
    subMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "sharedTemplate"}}}) {
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
