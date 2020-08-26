/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql, actions }) => {
  const { createPage } = boundActionCreators

  const allNewsTemplate = path.resolve('src/templates/all-news-template.js')
  const allResearcherTemplate = path.resolve('src/templates/all-researcher-template.js')
  const hpcSubpagesTemplate = path.resolve('src/templates/hpc-subpages-template.js')
  const coldFrontTemplate = path.resolve('src/templates/coldfront-template.js')
  const jobsTemplate = path.resolve('src/templates/jobs.js')
  const discoveryGuidesTemplate = path.resolve('src/templates/discoveryguides-template.js')
  const dataManagementTemplate = path.resolve('src/templates/datamanagement-template.js')
  const menuTemplate = path.resolve('src/templates/menu-template.js')
  const postTemplate = path.resolve('src/templates/content-post.js')
  const softwareTemplate = path.resolve('src/templates/software-template.js')
  const cloudComputingTemplate = path.resolve('src/templates/cloud-computing-template.js')
  const secureComputingTemplate = path.resolve('src/templates/secure-computing-template.js')
  const parallelProgrammingTemplate = path.resolve('src/templates/parallel-programming-template.js')
  const userGuidesMainTemplate = path.resolve('src/templates/user-guides-main-template.js')
  const userGuidesTemplate = path.resolve('src/templates/user-guides-template.js')
  const currentProjects = path.resolve('src/templates/current-projects.js')

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
        case 'allNews':
          template = allNewsTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'allResearcher':
          template = allResearcherTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'allProjects':
          template = currentProjects;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'coldFront':
          template = coldFrontTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'discoveryGuides':
          template = discoveryGuidesTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case "dataManagement":
          template = dataManagementTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case "jobs":
          template = jobsTemplate;
          path = `${node.frontmatter.path}`
          break;
        case 'navigation':
        case 'news':
        case 'projects':
        case 'Researchers': {
          node.frontmatter.path !== 'user-guides' ? (
            template = menuTemplate
          ) : (
            template = userGuidesTemplate
          )
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
        }
        break;
        case 'sharedTemplate':
          template = hpcSubpagesTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'software':
          template = softwareTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'cloudComputing':
          template = cloudComputingTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'secureComputing':
          template = secureComputingTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'parallelProgramming':
          template = parallelProgrammingTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'userGuides':
          template = userGuidesTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        case 'userSupport':
          template = userGuidesMainTemplate;
          path = `${node.frontmatter.parentPath}/${node.frontmatter.path}`
          break;
        default:
          template = postTemplate;
          path = node.frontmatter.path
          break;
      }

      if (node.frontmatter.path) {
        createPage({
          path: path,
          component: template,
          context: {
            slug: node.frontmatter.path,
          }
        })
      }
      
    })
  })
}
