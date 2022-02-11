import React from "react";

function Form({ name, onSubmit, children }) {

  return (
    <form action="#" className="popup__form" name={`myForm${name}`} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form;
