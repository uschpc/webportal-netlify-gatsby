import React from "react"
import { Link } from "gatsby"
import pagelist from "../pages.json";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Markdown from "react-markdown"
import Carsoul from "../components/slider.js";
import ServicesBox from "../components/services-box.js";
const AboutPage = () => {
    let contents = pagelist.filter(obj => {
        return obj.filePath === 'about'
    });
    return (
    <Layout>
        <SEO title="About" />
        <Carsoul />
        <ServicesBox />
        {/* <Markdown source={contents[0].content} escapeHtml={false} /> */}
        <Link to="/">Go to home page</Link>
    </Layout>
    )
}

export default AboutPage