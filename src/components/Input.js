import React from "react";

function Input({ type, idName, name, fieldName, placeholder, onChange, minLength, maxLength, value }) {

  return (
    <>
      <input type={type} id={idName} name={name} className={`popup__input popup__input_${fieldName}`} placeholder={placeholder} required
        minLength={minLength} maxLength={maxLength} value={value} onChange={onChange} />
      <span id={`${idName}-error`}></span>
    </>
  )
}

export default Input;
