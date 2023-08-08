import style from "./createUser.module.css";
import React, { useState, useRef } from "react";

const CreateUser = (props) => {
  //const [name, setInputName] = useState("");
  //const [age, setAge] = useState("");

  const userNameRef = useRef();
  const userAgeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userNameRef.current.value.length === 0 ||
      userAgeRef.current.value.length === 0
    ) {
      //setAge("");
      props.changeModal();
    } else {
      const userData = {
        name: userNameRef.current.value,
        age: userAgeRef.current.value,
        id: new Date(),
      };
      props.addUser(userData);
    }
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
    //setInputName("");
  };

  //const nameHandler = (e) => {
  //  setInputName(e.target.value.trim());
  //};

  //const ageHandler = (e) => {
  //  setAge(e.target.value.trim());
  //};
  return (
    <form className={style.create__form} onSubmit={submitHandler}>
      <div className={style.create__form_item}>
        <label className={style.create__form_label}>Имя</label>
        <input
          //value={name}
          className={style.create__form_input}
          //onChange={nameHandler}
          type="text"
          ref={userNameRef}
        ></input>
      </div>
      <div className={style.create__form_item}>
        <label className={style.create__form_label}>Возраст</label>
        <input
          min={0}
          //value={age}
          className={style.create__form_input}
          //onChange={ageHandler}
          type="number"
          ref={userAgeRef}
        ></input>
      </div>
      <button className={style.btn} type="submit">
        Добавить пользователя
      </button>
    </form>
  );
};

export default CreateUser;
