import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";
import {
  articlePageWrapper,
  articleHeader,
  articleCategory,
  articleMainTitle,
  articleAuthorRow,
  authorInfo,
  articleContent,
  articleFooter,
  articleActions,
  editBtn,
  deleteBtn,
  loadingClass,
  errorClass,
} from "../styles/common.js";

function ArticleByID() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const user = useAuth((state) => state.currentUser);

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [postingComment, setPostingComment] = useState(false);

  useEffect(() => {
    if (article) return;

    const getArticle = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`http://localhost:4000/user-api/article/${id}`, { withCredentials: true });

        setArticle(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error);
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // delete & restore article
  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive;

    const confirmMsg = newStatus ? "Restore this article?" : "Delete this article?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axios.patch(
        `http://localhost:4000/author-api/articles/${id}/status`,
        { isArticleActive: newStatus },
        { withCredentials: true },
      );

      console.log("SUCCESS:", res.data);

      setArticle(res.data.payload);

      toast.success(res.data.message);
    } catch (err) {
      console.log("ERROR:", err.response);

      const msg = err.response?.data?.message;

      if (err.response?.status === 400) {
        toast(msg); // already deleted/active case
      } else {
        setError(msg || "Operation failed");
      }
    }
  };
  
  const editArticle = (articleObj) => {
    navigate("/edit-article", { state: articleObj });
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Login to add comments");
      return;
    }

    if (!newComment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    setPostingComment(true);

    try {
      const userId = user._id || user.id || user.userId;
      const res = await axios.put(
        "http://localhost:4000/user-api/articles",
        { user: userId, articleId: id, comment: newComment.trim() },
        { withCredentials: true },
      );

      setArticle(res.data.payload);
      setNewComment("");
      toast.success("Comment added successfully");
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || "Could not add comment";
      toast.error(msg);
      setError(msg);
    } finally {
      setPostingComment(false);
    }
  };

  if (loading) return <p className={loadingClass}>Loading article...</p>;
  if (error) return <p className={errorClass}>{error}</p>;
  if (!article) return null;

  return (
    <div className={articlePageWrapper}>
      {/* Header */}
      <div className={articleHeader}>
        <span className={articleCategory}>{article.category}</span>

        <h1 className={`${articleMainTitle} uppercase`}>{article.title}</h1>

        <div className={articleAuthorRow}>
          <div className={authorInfo}>✍️ {article.author?.firstName || "Author"}</div>
          <div>{formatDate(article.createdAt)}</div>
        </div>
      </div>

      {/* Content */}
      <div className={articleContent}>{article.content}</div>

      {/* Comments Section */}
      <div className="mt-4 p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-semibold mb-3">Comments</h3>

        {article.comments?.length > 0 ? (
          <div className="space-y-3 mb-4">
            {article.comments.map((c, idx) => (
              <div key={idx} className="p-3 rounded border bg-white">
                <p className="text-sm text-gray-800">{c.comment}</p>
                <p className="text-xs text-gray-500 mt-1">
                  by {c.user?.firstName || c.user?.email || c.user || "Unknown"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600 mb-4">No comments yet. Be the first to share your thoughts!</p>
        )}

        {user?.role === "USER" ? (
          <form onSubmit={handleAddComment} className="space-y-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full border rounded p-2 resize-y"
              rows={3}
              placeholder="Write a comment..."
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={postingComment}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {postingComment ? "Posting..." : "Add Comment"}
              </button>
            </div>
          </form>
        ) : (
          <p className="text-xs text-gray-500">Login as USER to add comments.</p>
        )}
      </div>

      {/* AUTHOR actions */}
      {user?.role === "AUTHOR" && (
        <div className={articleActions}>
          <button className={editBtn} onClick={() => editArticle(article)}>
            Edit
          </button>

          <button className={deleteBtn} onClick={toggleArticleStatus}>
            {article.isArticleActive ? "Delete" : "Restore"}
          </button>
        </div>
      )}
      {/* form to add comment if role is USER */}

      {/* Footer */}
      <div className={articleFooter}>Last updated: {formatDate(article.updatedAt)}</div>
    </div>
  );
}

export default ArticleByID;