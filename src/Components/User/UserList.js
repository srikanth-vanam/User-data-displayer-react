import Card from "../UI/Card";
import classes from './UserList.module.css'
const UserList = (props) => {
  return (
    <Card className={`${classes.ul_outer}`}>
      <ul>
        {props.userlist.map((user) => (
          <li>
            {user.name} is  {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
