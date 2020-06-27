import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SharedTemplate from '../components/sharedTemplate'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
import { Link } from 'gatsby'
import Content from '../components/content'
import LatestNews from '../components/latest-news'
import CustomNews from '../components/custom-news'

const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  let content = data.content || data.newsContent;
  let subMenu = findSubMenu(content.frontmatter.parentEle, data.sideMenu)
  
    return (
      <Layout {...data.navigation}>
          <SEO title="User Guides"/>
          <div className="nav-pages">
            <div className="container">
                <div className="left-column">
                  <h3>{content.frontmatter.parentEle}</h3>
                  {subMenu.map((item, i) => {
                  return (
                    !item.node.frontmatter.externalPath ? (
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
                  {content.frontmatter.cat !== 'news' ? (
                    <>
                      {(content.frontmatter.uniqID !== "news_Announcements") && <Content flag={true}/>}
                      {(content.frontmatter.uniqID !== "news_Announcements") && <Markdown source={content.html} escapeHtml={false} />}
                      {(content.frontmatter.uniqID === "news_Announcements") && <LatestNews {...data.news } flag={true} />}
                      {(content.frontmatter.uniqID === "news_Announcements") && (
                        <div class="category-link-wrapper type-primary">
                          <Link class="category-link category-link-lg category-news type-primary" to={"/category/news/"}>
                            <img src="/images/news-arrows.svg" />
                            <p>
                              View all Reasearch Computing News
                            </p>
                            </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <CustomNews {...data.newsContent }/>
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
    content: markdownRemark(frontmatter: {cat: {eq: "navigation"}, path: {eq: $slug}}) {
        frontmatter {
          title
          route
          routePath
          parentEle
          uniqID
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
    news: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "news"}}}) {
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