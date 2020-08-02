import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer.js";

const NotFoundPage = ({data}) => (
  <Layout {...data.navigation}>
    <SEO title="404: Not found" />
    <p className="page-not-found">Sorry, the page you are trying to access does not exist.</p>
    <Footer />
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
query{
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
}`
