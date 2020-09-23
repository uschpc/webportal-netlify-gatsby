import React from 'react';
import Markdown from "react-markdown"
import { Link } from 'gatsby';

const Projects = (project) => {
    return (
        <div className="shared projects">
            {project.edges.map((item, i) => {
                return (
                    i < 6 && (
                        <Link className="press-projects-block" to={`${item.node.frontmatter.parentPath}/${item.node.frontmatter.path}`} key={i}>
                            <div className="block">
                                <h3 className="title">{item.node.frontmatter.title}</h3>
                                <img src={item.node.frontmatter.thumbnail} alt={item.node.frontmatter.title}></img>
                                <Markdown source={item.node.frontmatter.excerpt} escapeHtml={false} />
                            </div>
                        </Link>
                    )
                )
            })}
        </div>
    )
}

export default Projects;