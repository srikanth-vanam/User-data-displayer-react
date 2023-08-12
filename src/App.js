import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [userData, setUserData] = useState([
    {
      id: "1",
      name: "Rohit",
      age: "23",
      college: "RGUKT-BASAR",
    },
    {
      id: "2",
      name: "Yadaiah!",
      age: "22",
      college: "RGUKT-BASAR",
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
