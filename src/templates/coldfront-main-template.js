import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"

export default function Template({ data }) {
    const post = data.md.edges;
    return (
      <Layout {...data.navigation}>
          <SEO title="Cold Front"/>
          <div className="coldFront-parent-container">
              <h1>Research Computing User Portal</h1>
              <div className="page-body">
                <div className="left-column">
                  menu items
                </div>
                <div className="right-column">
                  <Markdown source={data.content.edges[0].node.html} escapeHtml={false} />
                  <h3>User Guides</h3>
                  {post.map ((item, i) => {
                      return (
                      <Link className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                          <li key={i}>{item.node.frontmatter.title}</li>
                      </Link>
                      )
                  })}
                </div>
               
              </div>
          </div>
          <Footer />
      </Layout>
    )
}

export const coldFrontQuery = graphql`
  query {
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
    content: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "highPerformanceComputingLandingPage"}}}) {
      edges {
          node {
          html
          }
      }
    }
    navigation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            parentEle
          }
        }
      }
    }
  }
`