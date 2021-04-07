import './Post.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPost } from '../../Store/ActionCreators/Post';

const Post = (props: any) => {
  const { post } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const handlerClick = (title: string, author: string, content: string, comments: Array<string>, authorID: string, id: string) => {
    dispatch(setCurrentPost(title, author, content, comments, authorID, id));
    history.push(`/posts/${authorID}`);
  }

  return (
    <div className="post" onClick={() => { handlerClick(post.title, post.author, post.content, post.comments, post.authorID, post.id) }}>
      <div className="user-info">
        <span className="post-title">{post.title}</span>
        <span className="post-author">@{post.author}</span>
      </div>
      <p className="p-text-container">{post.content}</p>
    </div>
  )
}

export default Post;
