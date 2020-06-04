import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export default function Template({ data }) {
  console.log('hit')
    const post = data.md.edges;
    return (
      <Layout {...data.navigation}>
          <SEO title="Cold Front"/>
          <div className="coldFront-parent-container">
              <h1>ColdFront</h1>
              <div className="page-body">
                {post.map ((item, i) => {
                    return (
                    <Link className="coldfront-menu-items" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`}>
                        <li key={i}>{item.node.frontmatter.title}</li>
                    </Link>
                    )
                })}
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