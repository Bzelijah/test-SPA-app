import './User.css';
import { useHistory } from 'react-router-dom';

const User = (props: any) => {
  const { user } = props;
  const history = useHistory();

  const handlerClick = (id: string) => {
    history.push(`/posts/user_id=${id}`)
  }

  return (
    <div className="users-item-container">
      <div className="item-div-text">
        <div className="item-names">
          <span className="item-fullname">{user.firstName} {user.lastName}</span>
          <span className="item-username">@{user.username}</span>
        </div>
        <div className="item-info">
          <span>{user.city}</span>
          <span>{user.company}</span>
        </div>
      </div>
      <div className="item-div-img-button">
        <img className="users-item-img" src="https://wmpics.pics/dm-0FXF.jpg" alt="" />
        <button onClick={() => { handlerClick(user.id) }} className="item-btn">View posts</button>
      </div>
    </div>
  )
}

export default User
