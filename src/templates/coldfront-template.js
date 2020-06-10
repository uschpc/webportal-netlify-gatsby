import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SideMenu from '../components/side-menu'
import Markdown from "react-markdown"


export default function Template({ data }) {
  console.log('data', data);
    const post = data.md;
    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
            <div className="coldFront-child-container">
              {/* <MenuRoute {...data} title={data.content.frontmatter.title} /> */}
              <h1>{post.frontmatter.title}</h1>
              <div className="page-body">
                <div className="left-column">
                  <h3>User Guides</h3>
                  <SideMenu {...data}/>
                </div>
                <div className="right-column">
                  <Markdown source={data.content.html} escapeHtml={false} />
                </div>
              </div>
            </div>
          <Footer />
      </Layout>
    )
}

export const coldFrontQuery = graphql`
  query($slug: String!) {
    md: markdownRemark(frontmatter: {cat: {eq: "coldFront"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
      }
      html
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
    subMenuLevel2: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
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
    content: markdownRemark(frontmatter: {cat: {eq: "coldFront"}, path: {eq: $slug}}) {
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