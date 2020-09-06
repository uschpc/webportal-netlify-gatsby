import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";
import {Helmet} from "react-helmet";


const IndexPage = (props) => {
  const [newsLetter, setFlag] = useState(false)
  const [model, setModelFlag] = useState(false)
  const openModel = () => {
    setModelFlag(!model)
  }
  useEffect(() => {
    setFlag(true)
  })

  return (
      <Layout {...props.data.navigation} openModel={model}>
         {newsLetter && (
          <Helmet>
          <script id="mcjs">{!function(c,h,i,m,p){ return (m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p))}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/1bdd19e9fa2d811ef66b3485a/274284bf0b2cd2f1ec24e01e7.js")}</script>
          </Helmet>
        )}
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
              thumbnailForSafari
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
