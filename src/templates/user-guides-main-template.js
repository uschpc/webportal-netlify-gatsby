import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SharedTemplate from '../components/sharedTemplate'
import Markdown from "react-markdown"
import SideMenu from '../components/side-menu'
import { Link } from 'gatsby'
import UserGuideSideMenu from '../components/UserGuideSideMenu'
import FAQ from '../components/frequently-asked-question'

export default function Template({ data }) {
  let mainPage = data.mainPage;
  let content = data.content;
    return (
      <Layout {...data.navigation} uniqId={content.frontmatter.uniqId}>
          <SEO title={mainPage ? mainPage.frontmatter.title : content.frontmatter.title}/>
          <div className="user-guides-main-pages">
            <div className="container">
                <div className="left-column">
                  <h1> {mainPage  || content.frontmatter.title === "Frequently Asked Questions" ? "User Information" : "User Support"}</h1>
                  {mainPage || content.frontmatter.title === "Frequently Asked Questions" ? <UserGuideSideMenu content={mainPage || content} sideMenu={data.UserGuidesSideMenu} /> : <SideMenu {...data}/>}
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
                                      <img src={item.node.frontmatter.thumbnail} />
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
                        <iframe className="ticket-submission" src="https://hpcaccount.usc.edu/static/web/supportform_simple.php" />
                      </>
                    ) : content.frontmatter.uniqId === 'FAQ' ? <FAQ html={content.html} /> : <Markdown source={content.html} escapeHtml={false} />
                   )}

                </div>
                <div className={`right-column ${content.frontmatter.uniqId !== 'FAQ' ? 'show' : 'hide'}`}>
                    <div className="system-status">
                        <h3>System Status <a href="https://hpc-grafana.usc.edu/" target="_blank"><i class="fa fa-external-link" style={{fontSize:"24px"}}></i></a></h3>
                        <iframe className="user-support" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=300s&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
                        <a className="view-more-graph" href="http://hpcaccount.usc.edu:8080/" target="_blank">View more graphs</a>
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
            thumbnail
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
          externalPath
          uniqId
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
