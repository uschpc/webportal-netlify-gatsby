import React, { useEffect } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export default function Template({ data }) {
  const pathName = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';
  const loadDataOnlyOnce = () => {
    let pathName = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';
    let DiscourseEmbed = { discourseUrl: 'https://hpc-discourse.usc.edu/',
                     discourseEmbedUrl: pathName };
    (function() {
      var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
      d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
    })();
  }
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  if (pathName !== '') {
    const filterdPost = data.md.edges
        .filter(edge => edge.node.frontmatter.path === pathName)
    const post = filterdPost[0].node;
    

    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
          <div className="pages-container">
              <h1>{post.frontmatter.title}</h1>
              <h4>
                  Posted by {post.frontmatter.author} on {post.frontmatter.date}
              </h4>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <div id='discourse-comments'></div>
          </div>
          <Footer />
      </Layout>
    )
  } else {
    return ''
  }
  
}

export const postQuery = graphql`
  query {
    md: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            path
            title
            date
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