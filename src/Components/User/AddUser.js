import classes from "./AddUser.module.css";
const AddUser = () => {
  return (
    <div className={`${classes.form_outer}`}>
      <form>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
