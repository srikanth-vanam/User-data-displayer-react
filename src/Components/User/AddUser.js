import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const college = collegeInputRef.current.value;
    // logic for validating the input
    // if both inputs are empty
    if (
      name.trim().length === 0 ||
      age.trim().length === 0 ||
      college.trim().length === 0 // for newly added college input field
    ) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name, age, college (non-empty values)",
      });
      return;
    }
    // if age is less than 1
    if (+age < 1) {
      // +age is the number value
      setError({
        title: "invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    const formdata = {
      id: Math.random().toString(),
      name: name,
      age: age,
      college: college,
    };
    props.onAddUser(formdata);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const clickHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={clickHandler}
        />
      )}
      <Card className={classes.form_outer}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          {/* college Name is new input field  */}
          <label htmlFor="collegeName">College Name</label>
          <input id="collegeName" type="text" ref={collegeInputRef}></input>
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
