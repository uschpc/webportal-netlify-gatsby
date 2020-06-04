import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";

const IndexPage = ({data}) => {

  return (
      <Layout {...data.navigation}>
          <SEO title="About" />
          <Carsoul />
          <BodyContent {...data} />
          <Footer />
      </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
    query{
      navigation: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "navigation"}}}) {
        edges {
          node {
            frontmatter {
              path
              title
              parentEle
              parentPath
            }
          }
        }
      }
      news: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "news"}}}) {
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
      featureBoxes: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "services"}}}) {
        edges {
          node {
            frontmatter {
              title
              path
              thumbnail
            }
            html
          }
        }
      }
    }
`
