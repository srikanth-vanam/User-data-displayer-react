import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.ul_outer}>
      <ul>
        {props.userlist.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old studying in {user.college}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
