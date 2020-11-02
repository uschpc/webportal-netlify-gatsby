import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SideMenu from '../components/side-menu'
import Markdown from "react-markdown"
import Content from '../components/content'

export default function Template({ data }) {
    const post = data.md;
    return (
      <Layout {...data.navigation} backToTopBtnFlag={data.md.frontmatter.backToTopBtnFlag}>
          <SEO title={post.frontmatter.title}/>
            <div className="coldFront-child-container">
              {/* <MenuRoute {...data} title={data.content.frontmatter.title} /> */}
              <div className="page-body">
                <div className="left-column">
                  <div className="position-fixed">
                    <Link to="/user-information/user-guides"><h2>User Guides</h2></Link>
                    <SideMenu {...data} parentMenuTitle="Secure Computing"/>
                  </div>
                </div>
                <div className="middle-column">
                <h1>{post.frontmatter.title}</h1>
                  <Content />
                  <Markdown source={data.content.html} escapeHtml={false} />
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

export const secureComputingQuery = graphql`
  query($slug: String!) {
    md: markdownRemark(frontmatter: {cat: {eq: "secureComputing"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
        backToTopBtnFlag
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
            externalPath
            redirectToPage
          }
        }
      }
    }
    subMenu: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "secureComputing"}}}) {
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
    subMenuLevel2: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "secureComputing"}}}) {
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
    content: markdownRemark(frontmatter: {cat: {eq: "secureComputing"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
        route
        routePath
        sideMenuParent
      }
      html
    }
    navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
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
