import style from "./createUser.module.css";
import React, { useState } from "react";

const CreateUser = (props) => {
  const [name, setInputName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    name.length === 0 && console.log("ошибка");
    setInputName("");
    setAge("");
    const userData = { name: name, age: age, id: new Date() };
    props.addUser(userData);
  };

  const nameHandler = (e) => {
    setInputName(e.target.value.trim());
  };

  const ageHandler = (e) => {
    setAge(e.target.value.trim());
  };
  return (
    <form className={style.create__form} onSubmit={submitHandler}>
      <div className={style.create__form_item}>
        <label className={style.create__form_label}>Имя</label>
        <input
          value={name}
          className={style.create__form_input}
          onChange={nameHandler}
          type="text"
        ></input>
      </div>
      <div className={style.create__form_item}>
        <label className={style.create__form_label}>Возраст</label>
        <input
          min={0}
          value={age}
          className={style.create__form_input}
          onChange={ageHandler}
          type="number"
        ></input>
      </div>
      <button className={style.btn} type="submit">
        Добавить пользователя
      </button>
    </form>
  );
};

export default CreateUser;
