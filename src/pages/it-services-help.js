import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const UserSupportIndex = ({data}) => {
  return (
      <Layout {...data.navigation}>
          <SEO title="user-support" />
          <iframe title="IT Support" src="https://d2zckdyoh6khem.cloudfront.net/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s&from=1593106620736&to=1593711420736&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
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
              externalPath
              redirectToPage
            }
          }
        }
      }
    }
`
