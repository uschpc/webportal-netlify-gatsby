import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'


const findMenuTitle = (menubar, nav) => {
  let menuTitle = nav.find((ele, i) => {
    if (ele.node.frontmatter.title === menubar) {
      return ele;
    }
    });
  return menuTitle ? menuTitle.node.frontmatter.parentEle : null;
}
const findSubMenu = (menubar, nav) => {
  const subNav = nav.filter((ele, i) => {
    return (ele.node.frontmatter.parentEle === menubar)
    });
  return subNav ? subNav : null;
}

export default function Template({ data }) {
  const pathName = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';
  // const loadDataOnlyOnce = () => {
  //   let pathName = typeof window !== 'undefined' ? window.location.href
  //   : '';
  //   window.DiscourseEmbed = { discourseUrl: 'https://hpc-discourse.usc.edu/',
  //                    discourseEmbedUrl: pathName };
  //     var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
  //     d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
  //     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  // }
  // useEffect(() => {
  //   loadDataOnlyOnce();
  // }, []);

  if (pathName !== '') {
    const filterdPost = data.md.edges
        .filter(edge => edge.node.frontmatter.path === pathName)
    const post = filterdPost[0].node;
    const menuNav = findMenuTitle(post.frontmatter.title, data.navigation.edges);    
    const subNav = findSubMenu(menuNav, data.navigation.edges);  

    return (
      <Layout {...data.navigation}>
          <SEO title={post.frontmatter.title}/>
          <div className="pages-container">
              <h1>{post.frontmatter.title}</h1>
              <div className="page-body">
                {subNav && (menuNav ==='About' || menuNav === 'Services') && (
                   <div className="sub-menu-items">
                    <h2>{menuNav ? menuNav : post.frontmatter.title}</h2>
                    <ul>
                      {subNav.map((nav, i) => {
                        return (  
                          <Link to={nav.node.frontmatter.parentPath ? `${nav.node.frontmatter.parentPath}/${nav.node.frontmatter.path}` : nav.node.frontmatter.path} key={i}>{nav.node.frontmatter.title}</Link>
                        )
                       }
                      )}
                    </ul>
                    </div>
                  )}
                   {(post.frontmatter.title ==='ColdFront') && (
                    <div className="coldfront-menu-items">
                      <ul>
                        {data.coldFront.edges.map ((item, i) => {
                          return (
                            <Link className="coldfront-menu-items" to={item.node.frontmatter.path}>
                              <li key={i}>{item.node.frontmatter.title}</li>
                            </Link>
                          )
                      })}
                      </ul>
                    </div>
                  )}
                {(post.frontmatter.cat !=='coldFront' && post.frontmatter.title !=='ColdFront') ? (
                  <span>
                       <div className="html-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                        {post.frontmatter.title === 'Ticket Submission' && <a href="https://hpcaccount.usc.edu/static/web/supportform_redirect_dev.php">Create a Ticket</a>}
                  </span>
                ) : (
                  post.frontmatter.title !=='ColdFront' && <div className="html-content-coldfront" dangerouslySetInnerHTML={{ __html: post.html }} />
                )}
                {subNav && (menuNav ==='About' || menuNav === 'Services') && (
                  <div className="discourse-box">discourse preview for posts tagged with data solution</div>
                )}
              </div>
              {/* <div id='disco
              urse-comments'></div> */}
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
            cat
          }
          html
        }
      }
    }
    coldFront: allMarkdownRemark(filter: {frontmatter: {cat: {eq: "coldFront"}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            parentPath
            cat
          }
        }
      }
    }
    navigation: allMarkdownRemark(sort: {fields: frontmatter___id}, filter: {frontmatter: {cat: {eq: "navigation"}}}) {
      edges {
        node {
          frontmatter {
            path
            title
            parentEle
            parentPath
            externalPath
          }
        }
      }
    }
  }
`