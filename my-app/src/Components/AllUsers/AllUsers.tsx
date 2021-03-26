import './AllUsers.css';
import { useSelector } from 'react-redux';
import User from '../User/User';

const AllUsers = () => {
  const users: any = useSelector(state => state);

  return (
    <div className="users-container">
      {users.users.map((el: any, index: number) =>
        <User key={index} user={el} />
      )}
    </div>
  )
}

export default AllUsers;
