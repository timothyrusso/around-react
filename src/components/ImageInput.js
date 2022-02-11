import React, { useRef } from "react";

function ImageInput({ type, idName, name, fieldName, placeholder, onUpdate }) {

  const avatarRef = useRef()

    // onUpdate({
    //   avatar: avatarRef.current.value
    // });

    return (
      <>
        <input type={type} id={idName} name={name} className={`popup__input popup__input_${fieldName}`} placeholder={placeholder} ref={avatarRef} required />
        <span id={`${idName}-error`}></span>
      </>
    )
  }

  export default ImageInput;
