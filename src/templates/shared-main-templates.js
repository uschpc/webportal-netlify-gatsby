import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"
import SharedTemplate from '../components/sharedTemplate'

export default function Template({ data }) {
    const post = data.md.edges;
    return (
      <Layout {...data.navigation}>
          <SEO title="High-Performance Computing"/>
          <SharedTemplate title="High-Performance Computing" cat="sharedTemplate" className="High-Performance-computing" {...data} />
          <Footer />
      </Layout>
    )
}

export const sharedMainTemplateQuery = graphql`
  query($slug: String!) {
    md: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "sharedTemplate"}}}) {
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
    content: markdownRemark(frontmatter: {cat: {eq: "highPerformanceComputingLandingPage"}, path: {eq: $slug}}) {
      frontmatter {
        route
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
          }
        }
      }
    }
  }
`