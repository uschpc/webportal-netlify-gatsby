import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Footer from "../components/footer.js";

const UserSupportIndex = ({data}) => {
  return (
      <Layout {...data.navigation}>
          <SEO title="user-support" />
            <div className="user-support">
                <h1>User Support</h1>
                <div className="container">
                    <div className="left-col">
                        {
                        data.md.edges.map ((item, i) => {
                            return (
                                <Link to={item.node.frontmatter.path} key={i}>
                                    <div className="user-support-box">
                                        <p className="title">{item.node.frontmatter.title}</p>
                                        <p className="description">{item.node.frontmatter.excerpt}</p>
                                    </div>
                                </Link>
                            )
                        })
                        }
                        <Markdown source={data.content.edges[0].node.html} escapeHtml={false} />
                    </div>
                    <div className="right-col">
                        <div className="system-status">
                            <h3>System Status</h3>
                            <img src="/images/Supercomputers-history.png" />
                        </div>
                        <div className="recent-news">
                            <h3>Recent News</h3>
                            <p>recent news</p>
                        </div>
                    </div>
                </div>
            </div>
          <Footer />
      </Layout>
  )
}

export default UserSupportIndex

export const pageQuery = graphql`
    query{
      md: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userSupport"}}}) {
        edges {
          node {
            frontmatter {
              title
              path
              excerpt
            }
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
      content: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "userSupportLandingPage"}}}) {
        edges {
          node {
            html
          }
        }
      }
    }
`
