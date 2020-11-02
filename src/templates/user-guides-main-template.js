import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
// import SharedTemplate from '../components/sharedTemplate'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
import { Link } from 'gatsby'
import UserGuideSideMenu from '../components/UserGuideSideMenu'
import FAQ from '../components/frequently-asked-question'

export default function Template({ data }) {
  let mainPage = data.mainPage;
  let content = data.content;

    return (
      <Layout {...data.navigation} backToTopBtnFlag={content.frontmatter.backToTopBtnFlag}>
          <SEO title={mainPage ? mainPage.frontmatter.title : content.frontmatter.title}/>
          <div className="user-guides-main-pages">
            <div className="container">
                <div className="left-column">
                  <div className="position-fixed">
                    <h1> {mainPage  || content.frontmatter.title === "Frequently Asked Questions" ? "User Information" : "User Support"}</h1>
                    {mainPage || content.frontmatter.title === "Frequently Asked Questions" ? <UserGuideSideMenu content={mainPage || content} sideMenu={data.UserGuidesSideMenu} /> : <SideMenu {...data}/>}
                  </div>
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
                                      <img src={item.node.frontmatter.featuredImage.childImageSharp.fluid.src} alt={item.node.frontmatter.title} />
                                      {/* <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title} /> */}
                                     <p className="title">{item.node.frontmatter.title}</p>
                                     <p className="description">{item.node.frontmatter.excerpt}</p>
                                 </div>
                             </Link>
                         )
                     })}
                     </span>
                   ) : (
                    content.frontmatter.title === "Ticket Submission" ? (
                      <>
                        <Markdown source={content.html} escapeHtml={false} />
                        <iframe title="Ticket Submission" className="ticket-submission" src="https://hpcaccount.usc.edu/static/web/supportform_simple.php" />
                      </>
                    ) : content.frontmatter.uniqId === 'FAQ' ? <FAQ html={content.html} /> : <Markdown source={content.html} escapeHtml={false} />
                   )}

                </div>
                {content.frontmatter.title !== "Frequently Asked Questions" ? (
                   <div className={`right-column ${mainPage && mainPage.frontmatter.cat === 'userGuidesLandingPage' ? 'show' : 'hide'}`}>
                   <div className="system-status">
                       <h2>System Info</h2>
                       <ul>
                         <li><a href="https://hpc-grafana.usc.edu/d/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s" target="_blank">Current compute node usage</a></li>
                         <li><a href="https://hpcxdmod.usc.edu/" target="_blank">Current CPU hours/job sizes</a></li>
                       </ul>
                   </div>
               </div>
                ) : (
                  <div className={`right-column ${mainPage && mainPage.frontmatter.cat === 'userGuidesLandingPage' ? 'show' : 'hide'}`}>
                  <div className="system-status">
                      <h4>Related Links</h4>
                      <ul>
                        <li><a href="https://hpc-grafana.usc.edu/d/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s" target="_blank">Current compute node usage</a></li>
                        <li><a href="https://hpcxdmod.usc.edu/" target="_blank">Current CPU hours/job sizes</a></li>
                      </ul>
                  </div>
              </div>
                )}

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
            thumbnail
            featuredImage {
              childImageSharp {
                fluid(fit: COVER, maxHeight: 200) {
                  src
                }
              }
            }
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
          cat
        }
      html
    }
    content: markdownRemark(frontmatter: {cat: {eq: "userSupport"}, path: {eq: $slug}}) {
        frontmatter {
          title
          route
          routePath
          externalPath
          uniqId
          backToTopBtnFlag
          cat
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
            externalPath
            redirectToPage
          }
        }
      }
    }
    UserGuidesSideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
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
    UserGuidesContent: markdownRemark(frontmatter: {cat: {eq: "navigation"}, path: {eq: $slug}}) {
      frontmatter {
        title
        route
        routePath
        parentEle
      }
    html
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
