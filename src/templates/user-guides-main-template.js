import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SharedTemplate from '../components/sharedTemplate'

export default function Template({ data }) {
    return (
      <Layout {...data.navigation}>
          <SEO title="User Guides"/>
            <SharedTemplate title="User Guides" className="user-guides" {...data} />
          <Footer />
      </Layout>
    )
}

export const coldFrontQuery = graphql`
  query {
    md: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userGuides"}}}) {
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
    content: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userGuidesLandingPage"}}}) {
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