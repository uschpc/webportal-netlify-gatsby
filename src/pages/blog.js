import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPage = ({data}) => (
    data.allMarkdownRemark.edges.map(post => {
        return (
            <div>
                <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
            </div>
            
            )
        }
    )
)

export default BlogPage

export const pageQuery = graphql`
    query{
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                    title
                    path
                }
              }
            }
        }
    }
`