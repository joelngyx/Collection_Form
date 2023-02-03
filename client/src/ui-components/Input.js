import React, { useState, useEffect } from "react";

const Input = (props) => {
  const [label, setLabel] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect (() => {
    switch (props.label) {
      case "Name":
        setLabel("Name");
        setPlaceholder("Provide your name");
        break;
      case "Age":
        setLabel("Age");
        setPlaceholder("Provide your age");
        break;
      case "Mobile":
        setLabel("Mobile number (Without the country code)");
        setPlaceholder("Provide your mobile number");
        break;
      case "OTP":
        setLabel("OTP (Sent to you via WhatsApp)")
        setPlaceholder("Provide the OTP sent to you");
        break;
      default:
        break;
    }
    // eslint-disable-next-line 
  }, []);

  const handleChange = (val) => {
    props.setValue(val);
    switch (props.label) {
      case "Name":
        if (/^[A-Za-z\s]*$/.test(val) === false) {
          setErrorMsg("Invalid characters found!");
          props.setValid(false);
        } else {
          setErrorMsg();
          props.setValid(true);
        }
        break;
      case "Age":
        if (/^[0-9]*$/.test(val) === false) {
          setErrorMsg("Only numerics allowed!");
          props.setValid(false);
        } else if (val > 100) {
          setErrorMsg("Please provide a valid age");
          props.setValid(false);
        } else {
          setErrorMsg();
          props.setValid(true);
        } 
        break;
      case "Mobile":
        props.setValid(false);
        if (/^[0-9]*$/.test(val) === false) {
          setErrorMsg("Only numerics are allowed!");
        } else if (val.length !== 8) {
          setErrorMsg("Please provide a mobile number that contains 8 digits!");
        } else if (val.charAt(0) === '+' || val.charAt(0) === '6') {
          setErrorMsg("Provide your mobile number without the country code");
        } else if (val.charAt(0) !== '8' && val.charAt(0) !== '9') {
          setErrorMsg("Please enter a valid mobile number!");
        } else {
          setErrorMsg();
          props.setValid(true);
        }
        break;
      case "OTP":
        setLabel("OTP (Sent to you via WhatsApp)")
        setPlaceholder("Provide the OTP sent");
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div><p>{label}</p></div>
      <div className="form-div"><input placeholder={placeholder} 
                  value={props.value} 
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}></input></div>
      {(props.label === "Mobile") ? <button disabled={props.disabled}>Get OTP</button> : <></>}
      {(props.label === "OTP") ? <button disabled={props.disabled} onClick={props.nextPage}>Submit OTP</button> : <></>}
      <div><p className="error-msg">{errorMsg}</p></div>
    </div>
  )
}

export default Input;