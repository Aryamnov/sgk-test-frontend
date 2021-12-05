import React from "react";
import { Main } from "./Main";
import { Popup } from "./Popup";

function App() {
  const [arrName, setArrName] = React.useState([] as String[]);
  const [isPopup, setIsPopup] = React.useState(false);

  function handleOpenPopup() {
    setIsPopup(true);
  }

  function handleClosePopup() {
    setIsPopup(false);
  }

  return (
    <div className="page">
      <Main
        arrName={arrName}
        setArrName={setArrName}
        handleOpenPopup={handleOpenPopup}
      />
      <Popup
        arrName={arrName}
        isPopup={isPopup}
        handleClosePopup={handleClosePopup}
      />
    </div>
  );
}

export default App;
