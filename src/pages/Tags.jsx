import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/SetupTags"
import Seo from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <secion className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <h5>{value} recipe</h5>
              </Link>
            )
          })}
        </secion>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
