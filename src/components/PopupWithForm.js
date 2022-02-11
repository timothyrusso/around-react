import React from "react";
import Popup from "./Popup";
import Form from "./Form";

function PopupWithForm({ name, title, isOpen, onClose, buttonText, confirmationButtonClass, confirmationTitleClass, onSubmit, loadingText, isLoading, children }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <Form name={`myForm${name}`} onSubmit={onSubmit}>
        <h2 className={`popup__title ${confirmationTitleClass}`}>{title}</h2>
        {children}
        <button type="submit" className={`submit-button ${confirmationButtonClass} popup__button`} >{isLoading ? loadingText : buttonText}</button>
      </Form>
    </Popup>
  )
}

export default PopupWithForm;
