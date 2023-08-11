import classes from "./AddUser.module.css";
import Card from "../UI/Card";
const AddUser = () => {
  return (
    <Card className={`${classes.form_outer}`}>
      <form>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
