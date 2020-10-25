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
// import Projects from '../components/projects'
// import ProjectPages from '../components/project-pages'
import ZoomMeeting from '../components/zoom-meeting'

const findSubMenu = (menubar, nav) => {
  const subNav = nav.edges.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  let content = data.content || data.newsContent || data.researcherContent || data.projectContent;
  let subMenu = findSubMenu(content.frontmatter.parentEle, data.sideMenu)

    return (
      <Layout {...data.navigation} backToTopBtnFlag={content.frontmatter.backToTopBtnFlag}>
          <SEO title={content.frontmatter.title}/>
          <div className="nav-pages">
            <div className="container">
                <div className="left-column">
                  <h2>{content.frontmatter.parentEle}</h2>
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
                  {content.frontmatter.cat !== 'news' ? (
                    <>
                      {(content.frontmatter.sharedID !== "news_Announcements_and_researcher_profile") && <Content />}
                      {(content.frontmatter.sharedID !== "news_Announcements_and_researcher_profile") && <Markdown source={content.html} escapeHtml={false} />}
                      {(content.frontmatter.uniqID === "news_Announcements") && (
                        <>
                          <LatestNews {...data.news } flag={true} />
                          <div className="category-link-wrapper type-primary">
                            <Link className="category-link category-link-lg category-news type-primary" to={"/news-and-events/news-and-announcements/all-news"}>
                              <img src="/images/news-arrows.svg" alt="View all Research Computing News" />
                              <p>
                                View all Research Computing News
                              </p>
                            </Link>
                          </div>
                        </>
                      )}
                      {(content.frontmatter.uniqID === "researcher_profile") && (
                        <>
                          <Researcher {...data.Researcher } flag={true} />
                          <div className="category-link-wrapper type-primary">
                            <Link className="category-link category-link-lg category-news type-primary" to={"news-and-events/researcher-profiles/all-researchers"}>
                              <img src="/images/news-arrows.svg" alt="View all Researcher Profiles" />
                              <p>
                                View all Researcher Profiles
                              </p>
                            </Link>
                          </div>
                        </>
                      )}
                      {(content.frontmatter.cat === "Researchers") && <ResearcherProfiles {...data.researcherContent } /> }
                      {/* {(content.frontmatter.uniqID === "current_projects") && (
                        <>
                          <Projects {...data.projects } />
                          <div className="category-link-wrapper type-primary">
                            <Link className="category-link category-link-lg category-news type-primary" to={"education-and-outreach/current-projects/all-projects"}>
                              <img src="/images/news-arrows.svg" />
                              <p>
                                View all projects
                              </p>
                            </Link>
                          </div>
                        </>
                      )} */}
                      {/* {(content.frontmatter.cat === "projects") && <ProjectPages {...data.projectContent } /> } */}
                    </>
                  ) : (
                    <CustomNews {...data.newsContent }/>
                  )}
                   { content.frontmatter.secCat === 'events' && <ZoomMeeting html={content.html} /> }
                   {(content.frontmatter.uniqID === 'condoClusterProgram') && data.allContent.edges.map((item, i) => {
                    return (
                      <span className="list-item" key={i}>
                        {item.node.frontmatter.redirectToPage ? (
                           <Link to={item.node.frontmatter.redirectToPage}>
                           {item.node.frontmatter.title}
                           </Link>
                        ) : (
                          <Link to={item.node.frontmatter.parentPath ? `${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}` : item.node.frontmatter.path}>
                           {item.node.frontmatter.title}
                          </Link>
                        )}
                        <p className="description">{item.node.frontmatter.excerpt}</p>
                      </span>
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
          sharedID
          backToTopBtnFlag
          secCat
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
    allContent: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "condoClusterProgram"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            parentEle
            redirectToPage
            cat
            excerpt
          }
          html
        }
      }
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
    projectContent: markdownRemark(frontmatter: {cat: {eq: "projects"}, path: {eq: $slug}}) {
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
            date
            thumbnail
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 300, quality: 100, fit: COVER) {
                  src
                }
              }
            }
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
            featuredImage {
              childImageSharp {
                fluid(fit: COVER, maxHeight: 212) {
                  src
                }
              }
            }
            excerpt
            parentPath
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {cat: {eq: "projects"}}}) {
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
