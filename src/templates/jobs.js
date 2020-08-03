import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Markdown from "react-markdown"
import { Link } from 'gatsby'
import Content from '../components/content'
import LatestNews from '../components/latest-news'
import CustomNews from '../components/custom-news'
import Researcher from '../components/researchers'
import ResearcherProfiles from '../components/researcher-profiles'

const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  let content = data.content;
  let subMenu = findSubMenu(content.frontmatter.parentEle, data.sideMenu)
  
    return (
      <Layout {...data.navigation}>
          <SEO title={content.frontmatter.title}/>
          <div className="nav-pages">
            <div className="container">
                <div className="left-column">
                  <h3>{content.frontmatter.parentEle}</h3>
                  {subMenu.map((item, i) => {
                  return (
                    !item.node.frontmatter.externalPath ? (
                      !item.node.frontmatter.redirectToPage ? (
                        <div className="side-menu" key={i}>
                          <ul>
                              <Link className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                                  {item.node.frontmatter.title}
                              </Link>
                          </ul>
                        </div> 
                      ) : (
                        <div className="side-menu" key={i}>
                          <ul>
                              <Link className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} to={item.node.frontmatter.redirectToPage}>
                                  {item.node.frontmatter.title}
                              </Link>
                          </ul>
                        </div> 
                      )
                      ) : (
                        <div className="side-menu" key={i}>
                          <ul>
                              <a className={`coldfront-menu-items ${content.frontmatter.title === item.node.frontmatter.title ? 'focused' : 'regular'}`} href={item.node.frontmatter.externalPath}>
                                  {item.node.frontmatter.title}
                              </a>
                          </ul>
                        </div> 
                      ))
                  })}
                </div>
                <div className="middle-column">
                <h1>{content.frontmatter.title}</h1>
                  <Markdown source={content.html} escapeHtml={false} />  
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

export const jobsQuery = graphql`
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
    content: markdownRemark(frontmatter: {cat: {eq: "jobs"}, path: {eq: $slug}}) {
        frontmatter {
          title
          route
          routePath
          parentEle
          uniqID
          sharedID
        }
      html
    }
    newsContent: markdownRemark(frontmatter: {cat: {eq: "news"}, path: {eq: $slug}}) {
      frontmatter {
        title
        parentEle
        cat
        thumbnail
        date
        excerpt
        author
        }
      html
    }
    researcherContent: markdownRemark(frontmatter: {cat: {eq: "Researchers"}, path: {eq: $slug}}) {
      frontmatter {
        title
        parentEle
        cat
        thumbnail
        date
        excerpt
        author
        sharedID
        }
      html
    }
    news: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {cat: {eq: "news"}}}) {
      edges {
        node {
          frontmatter {
            author
            title
            path
            thumbnail
            excerpt
            parentPath
          }
          html
        }
      }
    }
    Researcher: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {cat: {eq: "Researchers"}}}) {
      edges {
        node {
          frontmatter {
            author
            title
            path
            thumbnail
            excerpt
            parentPath
          }
          html
        }
      }
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
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            parentEle
            cat
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