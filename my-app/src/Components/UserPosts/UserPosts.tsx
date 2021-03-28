import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IInitState } from '../../Store/initState';
import Post from '../Post/Post';

const UserPosts = () => {
  interface IId {
    id: string,
  }

  const id: IId = useParams();

  const posts: Array<Object> = useSelector((state: IInitState) => state.posts);

  const postsCurrentUser = posts.filter((el: any) => el.authorID === id.id ? el : null);

  console.log(id.id);
  console.log(postsCurrentUser);



  return (
    <div className="posts-container">
      {postsCurrentUser.length > 0 ? postsCurrentUser.map((el: Object, index: number) =>
        <Post key={index} post={el} />
      ) :
        <h5>Данный пользователь пока не создал ни одного поста.</h5>
      }
    </div>
  )
}

export default UserPosts
