import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"
import { graphql } from "gatsby"


const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="Home Page" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus blanditiis assumenda aut. Quia, reiciendis. Ad a
              facere consequatur recusandae est!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
              earum.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              nulla quae nesciunt expedita non accusamus rem voluptas nam,
              ducimus optio quos voluptatibus illum perspiciatis veritatis!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
