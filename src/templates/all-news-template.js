import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import Pagination from '../components/pagination'

const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  let subMenu = findSubMenu(data.news.frontmatter.parentEle, data.sideMenu)
  let content = data.content;
  
    return (
      <Layout {...data.navigation}>
          <SEO title={data.news.frontmatter.title}/>
          <div className="nav-pages">
            <div className="container">
                <div className="left-column">
                  <h3>{data.news.frontmatter.parentEle}</h3>
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
                <h1>{data.news.frontmatter.title}</h1>
                <Pagination {...data.allNews} />
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
  query {
    content: markdownRemark(frontmatter: {cat: {eq: "navigation"}}) {
        frontmatter {
          title
          route
          routePath
          parentEle
          uniqID
        }
      html
    }
    allNews: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "news"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
            date
            excerpt
            thumbnail
            featuredImage {
              childImageSharp {
                fluid(fit: COVER, maxHeight: 212) {
                  src
                }
              }
            }
          }
        }
      }
    }
    news: markdownRemark(frontmatter: {cat: {eq: "allNews"}}) {
      frontmatter {
        title
        parentEle
        cat
        excerpt
        }
      html
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