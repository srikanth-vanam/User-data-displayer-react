import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [userData, setUserData] = useState([
    {
      name: "hello",
      age: "23",
    },
    {
      name: "world!",
      age: "34",
    },
  ]);
  const addUserHandler = (formdata) => {
    setUserData((prevFormdata) => {
      return [formdata, ...prevFormdata];
    });
    console.log("hi");
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList userlist={userData} />
    </div>
  );
}

export default App;
