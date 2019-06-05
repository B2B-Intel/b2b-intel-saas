import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <div className={"container"}>
            <p>About content</p>
        </div>
    </Layout>
)

export default AboutPage
