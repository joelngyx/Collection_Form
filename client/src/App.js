import React, { useState } from "react";
import "./style.scss";
import Input from './ui-components/Input';
import RadioForm from './ui-components/RadioForm';

const App = () => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [age, setAge] = useState('');
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [otp, setOTP] = useState('');

  return (
    <div className="App center">
      <div>
        <Input label="Name" value={name} setValue={setName} setValid={setIsNameValid}/>
        <Input label="Age" value={age} setValue={setAge} setValid={setIsAgeValid}/>
        <Input label="Mobile" value={mobile} setValue={setMobile} 
                setValid={setIsMobileValid} disabled={!isNameValid || !isAgeValid || !isMobileValid}/>
        <Input label="OTP" value={otp} setValue={setOTP}/>
        <RadioForm/>
        <RadioForm/>
        <p>Stuff</p>
      </div>
    </div>
  );
}

export default App;
