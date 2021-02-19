import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer.js";
import SharedTemplate from "../components/sharedTemplate"

const UserSupportIndex = ({data}) => {
  const [model, setModelFlag] = useState(false)
  const openModel = () => {
    setModelFlag(!model)
  }
  useEffect(() => {
    document.getElementById('___gatsby').classList.add("scroll");
  }, [])
  return (
      <Layout {...data.navigation} openModel={model}>
          <SEO title="User Support" />
           <SharedTemplate title="User Support" cat="userSupport" {...data} openModel={openModel} />
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
              thumbnail
              featuredImage {
                childImageSharp {
                  fluid(fit: COVER, maxHeight: 200) {
                    src
                  }
                }
              }
              parentPath
              excerpt
              id
              externalPath
              redirectToPage
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
