import React from 'react'
import { graphql } from 'gatsby'

const BlogPosts = ({ data }) => {
  const { html: __html } = data.markdownRemark;
  const { title, date, author, tag } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <p>Tags: {tag}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <p>written by {author}</p>
    </Layout>
  );
}

//* markdownRemark is a query made available from the gatsby-transformer-remark package
export const POST_BY_PATH = graphql`
  query POST_BY_PATH($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tag
      }
    }
  }
`;

export default BlogPosts