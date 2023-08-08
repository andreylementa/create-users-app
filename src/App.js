import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";

function App() {
  const usersData = [];
  const addUserHandler = (user) => {
    usersData.unshift(user);
    console.log(usersData);
  };
  return (
    <div className="App">
      <CreateUser addUser={addUserHandler}></CreateUser>
    </div>
  );
}

export default App;
