import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import '../all.css'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="container">
        <div className="leftCol">
          <img src={require('../images/profile-image.svg')} className="profile-image"></img>
          <p>{data.site.siteMetadata.author}</p>
          <p className="description">{data.site.siteMetadata.description}</p>
        </div>

        <div className="rightCol">
          <h4 style={{ textAlign: "right" }}>
            {data.allMarkdownRemark.totalCount} Posts
          </h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.fields.slug}
                css={{ textDecoration: "none", color: "inherit" }}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #bbb;
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
