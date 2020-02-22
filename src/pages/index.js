import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <PostList posts={posts} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}


//* Queries that are not being exported will not be ran a build time
//* Gatsby finds all queries that being exported, fetches the data, and renders the pages a build
//* Defining queries in a component like this will be passed as a data prop to the component
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
