import style from "./modal.module.css";

const Modal = (props) => {
  const changeModalHandler = () => {
    props.changeModal();
  };

  return (
    <div
      className={`${style.modal} ${props.activeModal && style.active_modal}`}
      onClick={changeModalHandler}
      onKeyDown={changeModalHandler}
    >
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        Некорректно
      </div>
    </div>
  );
};

export default Modal;
