import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Markdown from "react-markdown"
import Footer from '../components/footer'
import SideMenu from '../components/side-menu'
import Content from '../components/content'

export default function Template({ data }) {
    const post = data.content;
    const items = data.content.frontmatter.uniqID === "software" ? data.Software.edges : data.dataManagement.edges
    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
          <div className="user-guides-pages">
          <div className="container">
              <div className="left-column">
                <h2>User Guides</h2>
                <SideMenu {...data}/>
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
