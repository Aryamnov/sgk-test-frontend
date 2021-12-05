import * as React from "react";

export interface IPopupProps {
  arrName: String[];
  isPopup: boolean;
  handleClosePopup(): void;
}

export function Popup(props: IPopupProps) {
  return (
    <div className={`popup ${props.isPopup ? "popup_active" : ""}`}>
      <div className={`popup__container`}>
        <button
          className="popup__button"
          onClick={props.handleClosePopup}
        ></button>
        <p className="popup__title">Добро пожаловать,</p>
        <p className="popup__text">
          {props.arrName[0] + " " + props.arrName[1] + " " + props.arrName[2]}
        </p>
      </div>
    </div>
  );
}
