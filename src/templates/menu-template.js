import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export default function Template({ data }) {
    const post = data.md;
    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
          <div className="menu-container">
              <h1>{post.frontmatter.title}</h1>
              <div className="html-content-coldfront" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <Footer />
      </Layout>
    )
}

export const coldFrontQuery = graphql`
  query($slug: String!) {
    md: markdownRemark(frontmatter: {cat: {eq: "navigation"}, path: {eq: $slug}}) {
        frontmatter {
          title
          path
          parentPath
          cat
        }
        html
      }
    navigation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            parentEle
            parentPath
          }
        }
      }
    }
  }
`