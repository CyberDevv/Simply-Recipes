import { Link } from "gatsby"
import React from "react"
import SetupTags from "../utils/SetupTags"

const TagLists = ({ recipes }) => {
  const newTags = SetupTags(recipes)
  console.log(newTags)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagLists
