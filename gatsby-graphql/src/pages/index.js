import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h4 style={{textAlign: "right"}}>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={{textDecoration: "none", color: "inherit"}}>
            <Card style={{ marginBottom: '50px' }}>
              {/* <Card.Img variant="top" src="holder.js/300x200" /> */}
              <Card.Body>
                <Card.Title>{node.frontmatter.title}{" - "}<span
                css={css`
                  color: #bbb;
                `}
              >{node.frontmatter.date}</span></Card.Title>
                <Card.Text>
                {node.excerpt}
                </Card.Text>
                <Button variant="outline-dark" style={{float: "right"}}>Keep reading</Button>
              </Card.Body>
            </Card>
            {/* <h3
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
            <p>{node.excerpt}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`