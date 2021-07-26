import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke tax</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae ullam, laudantium perferendis esse quisquam nesciunt.
              Quas quae doloremque maiores vel!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              libero accusamus magnam voluptatum?
            </p>
            <Link to="/Contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look At This Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
