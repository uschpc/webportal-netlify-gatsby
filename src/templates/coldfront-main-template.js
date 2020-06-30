import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
// import MenuRoute from '../components/menu-route'

export default function Template({ data }) {
    const items = data.md.edges;
    const discovery = data.discovery.edges;
    return (
      <Layout {...data.navigation}>
          <SEO title={data.content.frontmatter.title}/>
          <div className="coldFront-parent-container">
              {/* <MenuRoute {...data} title={data.content.frontmatter.title} /> */}
              <div className="page-body">
                <div className="left-column">
                  <h2>User Guides</h2>
                  <SideMenu {...data}/>
                </div>
                <div className="middle-column">
                  <h1>{data.content.frontmatter.title}</h1>
                  {(data.content.frontmatter.uniqID === "user_portal") && (
                    <div className="login">
                      <a href="https://hpcaccount.usc.edu/" className="btn login-to-user-portal" target="_blank">
                        <span className="txt">Log in to Portal</span>
                        <span className="round"><i className="fa fa-chevron-right"></i></span>
                      </a>
                    </div>
                  )}
                  <Markdown source={data.content.html} escapeHtml={false} />
                  {(data.content.frontmatter.uniqID === "user_portal") && (
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
                   {(data.content.frontmatter.title === "Discovery") && (
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
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "userGuides"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
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
    content: markdownRemark(frontmatter: {cat: {eq: "sharedTemplate"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
        route
        routePath
        uniqID
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