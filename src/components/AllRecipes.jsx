import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import RecipesList from "./RecipesList"
import TagLists from "./TagLists"

const query = graphql`
  {
    recipe:allContentfulRecipe(sort: { fields: title }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query)
    const recipes = data.recipe.nodes
  return (
    <section className= "recipes-container">
      <TagLists recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
