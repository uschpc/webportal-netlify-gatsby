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
          <iframe id="tickets" src="https://hpcaccount.usc.edu/static/web/supportform.php"></iframe>
          <Footer />
      </Layout>
  )
}

export default UserSupportIndex

export const pageQuery = graphql`
    query{
      navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
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
