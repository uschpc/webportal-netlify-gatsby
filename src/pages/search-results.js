import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Carsoul from "../components/slider.js";
import BodyContent from "../components/body-content.js";
import Footer from "../components/footer.js";
import Search from "../components/SearchContainer.js";

const SearchIndex = ({data}) => {
  return (
      <Layout {...data.navigation}>
          <SEO title="search-result" />
            <div className="search-result">
                <Search {...data.md}/>
            </div>
          <Footer />
      </Layout>
  )
}

export default SearchIndex

export const pageQuery = graphql`
    query{
      md: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              parentEle
              excerpt
            }
            html
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
    }
`
