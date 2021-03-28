import { useSelector } from 'react-redux';
import { IInitState } from '../../Store/initState';
import Post from '../Post/Post';
import './AllPosts.css';

const AllPosts = () => {
  const posts: Array<Object> = useSelector((state: IInitState) => state.posts)

  return (
    <div className="posts-container">
      {posts.map((el: any, index: number) =>
        <Post key={index} post={el} />
      )}
    </div>
  )
}

export default AllPosts;
