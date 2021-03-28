import { useSelector } from "react-redux";
import { ICurrentPost, IInitState } from "../../Store/initState";
import Comments from "../Comments/Comments";
import '../Post/Post.css';

const PostWithComments = () => {
  const currentPost: ICurrentPost = useSelector((state: IInitState) => state.currentPost);

  return (
    <div className="post">
      <div className="user-info">
        <span className="post-title">{currentPost.title}</span>
        <span className="post-author">@{currentPost.author}</span>
      </div>
      <p className="p-text-container">{currentPost.content}</p>
      <Comments />
    </div>
  )
}

export default PostWithComments;
