import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
import MenuRoute from '../components/menu-route'

export default function Template({ data }) {
  console.log(111111)
    const items = data.md.edges;
    return (
      <Layout {...data.navigation}>
          <SEO title={data.content.frontmatter.title}/>
          <div className="coldFront-parent-container">
              <MenuRoute {...data} title={data.content.frontmatter.title} />
              <h1>{data.content.frontmatter.title}</h1>
              <div className="page-body">
                <div className="left-column">
                  <h3>User Guides</h3>
                  <SideMenu {...data}/>
                </div>
                <div className="right-column">
                  <Markdown source={data.content.html} escapeHtml={false} />
                  {(data.content.frontmatter.title === "Research Computing User Portal") && (
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
                </div>
               
              </div>
          </div>
          <Footer />
      </Layout>
    )
}

export const coldFrontQuery = graphql`
  query($slug: String!) {
    md: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
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
          }
        }
      }
    }
    subMenu: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "sharedTemplate"}}}) {
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
    navigation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            parentPath
            title
            parentEle
          }
        }
      }
    }
  }
`