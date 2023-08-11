import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = () => {
  return (
    <Card className={`${classes.form_outer}`}>
      <form>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
