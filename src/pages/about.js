import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
const AboutPage = () => {
    let contents = pagelist.filter(obj => {
        return obj.filePath === 'about'
    });
    return (
    <Layout>
        <SEO title="About" />
        <Markdown source={contents[0].content} escapeHtml={false} />
        <Link to="/">Go to home page</Link>
    </Layout>
    )
}

export default AboutPage
