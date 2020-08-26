import React from "react";
import { Link } from "gatsby";
import Markdown from "react-markdown"

const ProjectPages = (project) => {
    const generateFreindlyDate = (date) => {
        let userFreindlyDaye = new Date(date)
        return `${userFreindlyDaye.getMonth() + 1}/${userFreindlyDaye.getDate()}/${userFreindlyDaye.getUTCFullYear()}`
    }
    return (
        <div className="block project-child-pages">
            <img src={project.frontmatter.thumbnail} alt={project.frontmatter.author}></img>
            <h3 className="excerpt">{project.frontmatter.excerpt}</h3>
            <h4 className="date">{generateFreindlyDate(project.frontmatter.date)}</h4>
            <h4 className="author">{`By ${project.frontmatter.author}`}</h4>
            <Markdown source={project.html} escapeHtml={false} />
        </div>
    )
}

export default ProjectPages;
