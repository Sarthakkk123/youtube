import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div>
      <ul className="btn-menu-top">
        <Button name="All" />
        <Button name="Computer Programming" />
        <Button name="News" />
        <Button name="Gaming" />
        <Button name="Live" />
        <Button name="Music" />
        <Button name="Mixes" />
        <Button name="SmartPhones" />
        <Button name="Tourism" />
        <Button name="Sport Entertainment" />
      </ul>
    </div>
  );
};

export default ButtonList;
