import { useSelector } from "react-redux";
import { ICurrentPost, IInitState } from "../../Store/initState";
import './Comments.css';

const Comments = () => {
  const currentPost: ICurrentPost = useSelector((state: IInitState) => state.currentPost);

  console.log(currentPost);


  return (
    <div>
      <div className="info-comment-container">
        <span className='comments-span'>Comments({currentPost.comments.length})</span>
        <button className="comment-item-btn">Add comment</button>
      </div>
      {currentPost.comments.map((el: string, index: number) =>
        <div key={index} className="p-text-container">
          <p>{el}</p>
        </div>
      )}
    </div>
  )
}

export default Comments;
