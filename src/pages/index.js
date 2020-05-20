import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";

const IndexPage = ({data}) => {
  console.log('yaseen', data);
  let contents = pagelist.filter(obj => {
    return obj.filePath === 'index'
  });

  return (
      <Layout>
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
