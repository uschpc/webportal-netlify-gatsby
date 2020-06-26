/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/content-post.js')
  const coldFrontMainTemplate = path.resolve('src/templates/coldfront-main-template.js')
  const coldFrontTemplate = path.resolve('src/templates/coldfront-template.js')
  //const discoveryGuidesMainTemplate = path.resolve('src/templates/discoveryguides-main-template.js')
  const discoveryGuidesTemplate = path.resolve('src/templates/discoveryguides-template.js')
  const menuTemplate = path.resolve('src/templates/menu-template.js')
  const userGuidesMainTemplate = path.resolve('src/templates/user-guides-main-template.js')
  const userGuidesTemplate = path.resolve('src/templates/user-guides-template.js')
  const sharedMainTemplate = path.resolve('src/templates/shared-main-templates.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              parentPath
              title
              date
              author
              cat
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = '';
      let path = '';

      switch(node.frontmatter.cat) {
        case 'coldFront':
          template = coldFrontTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'discoveryGuides':
          template = discoveryGuidesTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'navigation': {
          node.frontmatter.path !== 'user-guides' ? (
            template = menuTemplate
          ) : (
            template = userGuidesTemplate
          )
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
        }
        break;
        case 'userSupport':
          template = userGuidesMainTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'userGuides':
          template = userGuidesTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'sharedTemplate':
          template = coldFrontMainTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        default:
          template = postTemplate;
          path = node.frontmatter.path
          break;
      }


      createPage({
        path: path,
        component: template,
        context: { 
          slug: node.frontmatter.path,
        }
      })
    })
  })
}
