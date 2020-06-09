import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer.js";
import SharedTemplate from "../components/sharedTemplate"

const UserSupportIndex = ({data}) => {
  return (
      <Layout {...data.navigation}>
          <SEO title="user-support" />
           <SharedTemplate title="User Support" cat="userSupport" {...data} />
          <Footer />
      </Layout>
  )
}

export default UserSupportIndex

export const pageQuery = graphql`
    query{
      md: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "userSupport"}}}) {
        edges {
          node {
            frontmatter {
              title
              path
              parentPath
              excerpt
              id
            }
          }
        }
      }
      navigation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "navigation"}}}) {
        edges {
          node {
            frontmatter {
              path
              title
              parentEle
            }
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
      content: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userSupportLandingPage"}}}) {
        edges {
          node {
            html
          }
        }
      }
    }
`
