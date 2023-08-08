import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import UserList from "./components/UserList/UserList";
import React, { useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);
  const addUserHandler = (user) => {
    setUsersData((prevState) => {
      const updatedData = [...prevState];
      updatedData.unshift(user);
      return updatedData;
    });
  };

  const deleteDataHandler = (id) => {
    setUsersData((prevState) => {
      const updatedData = [...prevState];
      return updatedData.filter((data) => data.id !== id);
    });
  };

  const content =
    usersData.length > 0 ? (
      <UserList onDelete={deleteDataHandler} users={usersData}></UserList>
    ) : (
      <p>Пользователей нет. Добавить?</p>
    );

  return (
    <div className="App">
      <CreateUser addUser={addUserHandler}></CreateUser>
      {content}
    </div>
  );
}

export default App;
