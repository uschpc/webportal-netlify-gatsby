import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";

const IndexPage = (props) => {
  const [model, setModelFlag] = useState(false)
  const openModel = () => {
    setModelFlag(!model)
  }

  return (
      <Layout {...props.data.navigation} openModel={model}>
          <SEO title="Home" />
          <Carsoul />
          <BodyContent {...props.data} openModel={openModel} />
          <Footer />
      </Layout>
  )
}

export default IndexPage

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
      Announcements: markdownRemark(frontmatter: {cat: {eq: "announcements"}}) {
        frontmatter {
          date
          author
          path
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
              thumbnail
              excerpt
              parentPath
            }
            html
          }
        }
      }
      featureStory: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "feature"}}}) {
        edges {
          node {
            frontmatter {
              author
              title
              path
              thumbnail
              excerpt
            }
            html
          }
        }
      }
      featureBoxes: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "services"}}}) {
        edges {
          node {
            frontmatter {
              title
              path
              thumbnail
              redirectToPage
            }
            html
          }
        }
      }
    }
`
