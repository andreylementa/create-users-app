import style from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li
      className={style.user_item}
      onClick={deleteHandler}
    >{`${props.name} - ${props.age} лет`}</li>
  );
};

export default UserItem;
