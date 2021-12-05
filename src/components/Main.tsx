import * as React from "react";

export interface IMainProps {
  arrName: String[];
  setArrName: any;
  handleOpenPopup(): void;
}

export function Main(props: IMainProps) {
  const regex = /^[А-Яа-я\-]{3,}\s{1,}[А-Яа-я\-]{3,}\s{1,}[А-Яа-я\-]{3,}$/;
  const re = /\s{1,}/;

  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!name) {
      setError("");
    } else if (regex.exec(name)) {
      setError("");
      props.setArrName(name.split(re));
    } else {
      setError("Неправильный формат ввода");
    }
  }, [name]);

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="main">
      <form className="form">
        <h1 className="form__title">Введите ФИО:</h1>
        <input
          className="form__input"
          type="email"
          value={name || ""}
          onChange={handleChangeName}
        ></input>
        <span className="form__error">{error}</span>
      </form>
      {error || name == "" ? (
        <></>
      ) : (
        <div className="info">
          <ul className="info__list">
            <li className="info__element">
              <h2 className="info__title">Фамилия:</h2>
              <p className="info__result">{props.arrName[0]}</p>
            </li>
            <li className="info__element">
              <h2 className="info__title">Имя:</h2>
              <p className="info__result">{props.arrName[1]}</p>
            </li>
            <li className="info__element">
              <h2 className="info__title">Отчество:</h2>
              <p className="info__result">{props.arrName[2]}</p>
            </li>
          </ul>
          <button className="info__button" onClick={props.handleOpenPopup}>
            Подтвердить
          </button>
        </div>
      )}
    </div>
  );
}
