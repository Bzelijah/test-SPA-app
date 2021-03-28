import './Post.css';

const Post = (props: any) => {
  const { post } = props;

  return (
    <div className="post">
      <div className="user-info">
        <span className="post-title">{post.title}</span>
        <span className="post-author">@{post.author}</span>
      </div>
      <p className="p-text-container">{post.content}</p>
    </div>
  )
}

export default Post;
