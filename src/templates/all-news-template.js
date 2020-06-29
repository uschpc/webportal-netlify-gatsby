import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import { Link } from 'gatsby'

const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  console.log('data', data);
  let subMenu = findSubMenu(data.news.frontmatter.parentEle, data.sideMenu)
  let content = data.content;
  
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
                <h1>{data.news.frontmatter.title}</h1>
                {data.allNews.edges.map((item, i) => {
                  return (
                    <Link className="news-url" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                      <div className="latest-news" key={i}>
                        <div className="content">
                          <h3>{item.node.frontmatter.title}</h3>
                          <h4>{item.node.frontmatter.excerpt}</h4>
                        </div>
                        <img src={item.node.frontmatter.thumbnail} />
                      </div> 
                    </Link>
                   )
                })}
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
    allNews: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "news"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
            excerpt
            thumbnail
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