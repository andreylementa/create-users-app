import style from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <ul className={style.user_list}>
      {props.users.map((item) => {
        return (
          <UserItem
            onDelete={props.onDelete}
            key={item.id}
            id={item.id}
            age={item.age}
            name={item.name}
          ></UserItem>
        );
      })}
    </ul>
  );
};

export default UserList;
