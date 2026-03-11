import React from "react"
import axios from "axios"
import { useAuth } from "../store/authStore"
import { useNavigate } from "react-router-dom"
import {articleGrid, articleCardClass, articleTitle, articleBody, tagClass} from "../styles/common"

export default function UserProfile() {

  const navigate = useNavigate()
  const logout = useAuth(state => state.logout)

  const [articles, setArticles] = React.useState([])

  // fetch all articles
  React.useEffect(() => {
    async function getArticles() {
      try {
        let authorid = "69ae857ca752972116f5e6e9"
        let res = await axios.get(
          `http://localhost:4000/author-api/articles/${authorid}`, { withCredentials: true }
        )

        setArticles(res.data.payload || [])

      } catch (err) {
        console.log(err)
      }
    }

    getArticles()

  }, [])

  const onLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <div className="p-5">

      {articles.length === 0 ? (
        <h2 className="mt-5 text-xl">No articles available</h2>
      ) : (

        <div className={articleGrid}>

          {articles.map((article) => (
            <div
              key={article._id}
              className={articleCardClass}
            >

              <h3 className={articleTitle}>
                {article.title}
              </h3>

              <p className={articleBody}>
                {article.content}
              </p>
              <button className={tagClass} >
                Read Article
              </button>

            </div>
          ))}
        </div>
      )}
      <button
            onClick={onLogout}
            className="bg-red-400 text-white px-4 py-2 rounded mt-10"
          >
            Logout
      </button>
    </div>
  )
}