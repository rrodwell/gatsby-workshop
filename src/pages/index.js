import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

//* Queries that are not being exported will not be ran a build time
//* Gatsby finds all queries that being exported, fetches the data, and renders the pages a build
export const QUERY = graphql`
  query ALL_POST_QUERY {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          html
          frontmatter {
            author
            date
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
