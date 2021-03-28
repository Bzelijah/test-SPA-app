import './AllUsers.css';
import { useSelector } from 'react-redux';
import { IInitState } from '../../Store/initState';
import User from '../User/User';

const AllUsers = () => {
  const users: Array<Object> = useSelector((state: IInitState) => state.users);

  return (
    <div className="users-container">
      {users.map((el: Object, index: number) =>
        <User key={index} user={el} />
      )}
    </div>
  )
}

export default AllUsers;
