import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Navbar from '../components/navbar'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div
    css={css`
      margin: 0 auto;
      max-width: 1100px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
    >
      <Navbar />
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div css={css`
      margin: 0 auto;
      max-width: 800px;
      `}>
        <h1 style={{textAlign: "center", marginBottom: "50px"}}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
  </div>
      
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`