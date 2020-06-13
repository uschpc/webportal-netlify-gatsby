import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SharedTemplate from '../components/sharedTemplate'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
import { Link } from 'gatsby'

export default function Template({ data }) {
  let mainPage = data.mainPage;
  let content = data.content;
    return (
      <Layout {...data.navigation}>
          <SEO title="User Guides"/>
          <div className="user-guides-main-pages">
            <div className="container">
                <div className="left-column">
                  <h2>User Support</h2>
                  <SideMenu {...data}/>
                </div>
                <div className="middle-column">
                  <h1>{mainPage ? mainPage.frontmatter.title : content.frontmatter.title}</h1>
                  {mainPage ? (
                    <span>
                     <Markdown source={mainPage.html} escapeHtml={false} />
                     {data.md.edges.map ((item, i) => {
                         return (
                             <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path} key={i}>
                                 <div className="user-support-box">
                                     <p className="title">{item.node.frontmatter.title}</p>
                                     <p className="description">{item.node.frontmatter.excerpt}</p>
                                 </div>
                             </Link>
                         )
                     })}
                     </span>
                   ) : (
                    <Markdown source={content.html} escapeHtml={false} />
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
    md: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "userGuides"}}}) {
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
    mainPage: markdownRemark(frontmatter: {cat: {eq: "userGuidesLandingPage"}, path: {eq: $slug}}) {
        frontmatter {
          title
          route
          routePath
        }
      html
    }
    content: markdownRemark(frontmatter: {cat: {eq: "userSupport"}, path: {eq: $slug}}) {
        frontmatter {
          title
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
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "userSupport"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
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