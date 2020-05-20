import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
        <SEO title={post.frontmatter.title}/>
        <div className="pages-container">
            <h1>{post.frontmatter.title}</h1>
            <h4>
                Posted by {post.frontmatter.author} on {post.frontmatter.date}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Footer />
    </Layout>
  )
}

export const postQuery = graphql`
  query {
    markdownRemark {
        frontmatter {
          author
          title
          date
        }
        html
      }
  }
`