import React from "react"
import { Link } from "gatsby"
import FancyParagraph from "../components/fancy-paragraph"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="회사소개" />
    <h1>웹학교는 언제나 그 자리에!</h1>
    <FancyParagraph paragraphText="Styled with CSS Modules." />
    <Link to="/">홈</Link>
  </Layout>
)

export default AboutUs
