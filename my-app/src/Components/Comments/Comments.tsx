import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommentInCurrentPost, writeNewComment } from "../../Store/ActionCreators/Post";
import { ICurrentPost, IInitState } from "../../Store/initState";
import { addComment } from '../../Store/ActionCreators/Post';
import './Comments.css';

const Comments = () => {
  const currentPost: ICurrentPost = useSelector((state: IInitState) => state.currentPost);
  const newComment = useSelector((state: IInitState) => state.writeNewComment);
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handlerWriteNewComment = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(writeNewComment(true));
  }

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addComment(comment, currentPost.id));
    dispatch(addCommentInCurrentPost(comment));
    dispatch(writeNewComment(false));
  }

  return (
    <div>
      <div className="info-comment-container">
        <span className='comments-span'>Comments({currentPost.comments.length})</span>
        <button className="comment-item-btn" onClick={(event: React.MouseEvent<HTMLElement>) => { handlerWriteNewComment(event) }}>Add comment</button>
      </div>
      {newComment ?
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handlerSubmit(event)} className="form-new-comment">
          <input value={comment} onChange={handlerChange} type="text" className="input-comment" />
          <button type="submit" className="btn-new-comment">+</button>
        </form> : null
      }
      {currentPost.comments.map((el: string, index: number) =>
        <div key={index} className="p-text-container">
          <p>{el}</p>
        </div>
      )}
    </div>
  )
}

export default Comments;
