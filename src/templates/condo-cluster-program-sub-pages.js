import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import SideMenu from '../components/side-menu'
import Markdown from "react-markdown"
import Content from '../components/content'
import NavigationSideMenu from '../components/navigation-side-menu'

const findSubMenu = (menubar, nav) => {
    const subNav = nav.edges.filter((ele, i) => {
      return (ele.node.frontmatter.parentEle === menubar)
      });
    return subNav ? subNav : null;
  }


export default function Template({ data }) {
    const post = data.md;
    let content = data.content
    let sideMenu = findSubMenu('User Information', data.sideMenu)

    return (
      <Layout {...data.navigation} backToTopBtnFlag={data.md.frontmatter.backToTopBtnFlag}>
          <SEO title={post.frontmatter.title}/>
            <div className="coldFront-child-container">
              {/* <MenuRoute {...data} title={data.content.frontmatter.title} /> */}
              <div className="page-body">
                <div className="left-column">
                  <Link to="/user-information/ccp"><h2>User information</h2></Link> 
                  <NavigationSideMenu sideMenu={sideMenu} subMenu={data.subMenu} subMenuLevel2={data.subMenuLevel2} title={post.frontmatter.title} sideMenuParent="Enrollment Information" parentMenuTitle="Condo Cluster Program" />
                </div>
                <div className="middle-column">
                <h1>{post.frontmatter.title}</h1>
                  <Markdown source={data.content.html} escapeHtml={false} />
                </div>
                <div className="right-column">
                <Content />
                  {/* <div className="system-status">
                      <h4>Related Links</h4>
                      <h5>Some links</h5>
                      <h5>Some links</h5>
                      <h5>Some links</h5>
                  </div> */}
                </div>
              </div>
            </div>
          <Footer />
      </Layout>
    )
}

export const condoClusterProgramsSubPagesQuery = graphql`
  query($slug: String!) {
    md: markdownRemark(frontmatter: {cat: {eq: "condoClusterProgramEnrollmentSubPages"}, path: {eq: $slug}}) {
      frontmatter {
        title
        path
        parentPath
        cat
        backToTopBtnFlag
      }
      html
    }
    content123: markdownRemark(frontmatter: {cat: {eq: "navigation"}, path: {eq: $slug}}) {
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
    sideMenu: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            externalPath
            redirectToPage
            parentEle
          }
        }
      }
    }
    subMenu: allMarkdownRemark(sort: {fields: frontmatter___id},filter: {frontmatter: {cat: {eq: "condoClusterProgram"}}}) {
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
    subMenuLevel2: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "condoClusterProgramEnrollmentSubPages"}}}) {
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
    content: markdownRemark(frontmatter: {cat: {eq: "condoClusterProgramEnrollmentSubPages"}, path: {eq: $slug}}) {
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
