import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
const AddUser = (props) => {
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const nameChangeHandler=(event)=>{
    setName(event.target.value);
  }
  const ageChangeHandler=(event)=>{
    setAge(event.target.value);
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    // logic for validating the input
    // if both inputs are empty
    if(name.length === 0 && age.length === 0){
      return;
    }
    // if age is less than 1
    if(+age < 1){// +age is the number value
      return;
    }
    const formdata={
      name:name,
      age:age
    }
    props.onAddUser(formdata);
    console.log(name,age);
    setName('');
    setAge('');
  }
  return (
    <Card className={`${classes.form_outer}`}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={name} onChange={nameChangeHandler}></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
