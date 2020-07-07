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
          <iframe src="https://hpc-grafana.usc.edu/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s&from=1593106620736&to=1593711420736&var-host=All&panelId=3" width="450" height="200" frameBorder="0"></iframe>
          {/* <iframe src="https://hpc-grafana.usc.edu/d-solo/vsUGHjmMk/compute-node-usage?orgId=1&refresh=30s&from=1593106515570&to=1593711315570&var-host=All&panelId=2" width="450" height="200" frameborder="0"></iframe> */}
          {/* <iframe src="https://hpc-grafana.usc.edu/d-solo/2BKpInWMz/hpc-system-overview?orgId=1&refresh=1m&from=1593105334381&to=1593710134381&panelId=2" width="450" height="200" frameborder="0"></iframe> */}
          {/* <iframe id="tickets" src="https://hpcaccount.usc.edu/static/web/supportform.php"></iframe> */}
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
              externalPath
              redirectToPage
            }
          }
        }
      }
    }
`
