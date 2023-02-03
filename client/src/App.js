import React, { useState } from "react";
import "./style.scss";
import Input from './ui-components/Input';
import RadioForm from './ui-components/RadioForm';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [choice1, setChoice1] = useState(0);
  const [choice2, setChoice2] = useState(0);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);

  const [otp, setOTP] = useState('');
  const [btnText, setBtnText] = useState("Submit");

  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(2);
  }

  const submitEntry = async() => {
    try {
      const body = {
        "phone_number" : `${mobile}`,
        "user_name" : `${name}`,
        "user_age" : `${age}`,
        "choice_1" : `${choice1}`,
        "choice_2" : `${choice2}`
      }

      const postEntry = await fetch(
        "http://localhost:5500/entries", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        }
      ).then(response => response.json()
      ).then(response => {
        console.log(response.received);
        if (response.received !== "true") {
          setBtnText("Invalid mobile number");
        } else {
          setBtnText("Submitted!");
        }
      })

    } catch (e) {
      console.log(e.message);
      setBtnText("Something went wrong");
    }
  }

  switch (page) {
    case 1:
      return (
        <div className="App center">
          <div>
            <Input label="Name" value={name} setValue={setName} setValid={setIsNameValid}/>
            <Input label="Age" value={age} setValue={setAge} setValid={setIsAgeValid}/>
            <Input label="Mobile" value={mobile} setValue={setMobile} 
                    setValid={setIsMobileValid} disabled={!isNameValid || !isAgeValid || !isMobileValid}/>
            <Input label="OTP" value={otp} setValue={setOTP} 
                    disabled={!isNameValid || !isAgeValid || !isMobileValid}
                    nextPage={nextPage}/>
            <div className="fineprint">
              <p>
                Amici, Romani, cives, date aures vestras mihi; sepultum neque laudatum venio; 
                mala quae viri vitas suas faciant post eos vivent, saepe bona cum ossuibus eorum 
                sepelintur, esto Caesari… Brutus nobilis vobis Caesarem ambitiosum esse dixit, si 
                ita esset, vitium saevum esset, saeve Caesar respondit… hic, situs a Bruto 
                ceterisque (nam Brutus decorus; itaque omnes ei; omnes decori) dictum pro Caesaris 
                sepulture… amicus meus, mihi fidelis iustusque erat: sed Brutus eum ambitiosum dicit; 
                et Brutus decorus… Obsides multos domum Romam tulit, cuius lytri arcas publicas 
                implevit: Caesarne hoc ambitiosus visus est? Cum pauperes fleverunt, Caesar flevit: 
                ambitio rerum duriorum esset: tamen Brutus ambitiosum eum esse; et Brutus decorus. 
                Certe in Lupercale ei coronam regiam tripliciter obtuli, quam tripliciter abnuit: hicne 
                ambitio erat? Tamen Brutus ambitiosum eum esse; et, certe, hic decorus est. Non causa 
                abrenuntiandis ea quae Brutus dixit dico, sed ibi est causa dicendis de quibus scio. 
                Olim certe vos omnes eum amaverunt, non sine causa: quae causa vos a lugendo ei 
                abstinet? O arbitrium! Tu ad bestias brutas, et viri eorum mentes amiserunt… Mihi 
                ignoscite; cor meum in sarcophago cum Caesare est, et consistere debeo dum ad me redit.
              </p>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="App center">
          <div>
            <RadioForm setChoice={setChoice1} name="goals-1"/>
            <RadioForm setChoice={setChoice2} name="goals-2"/>
            <button className="submit-btn" onClick={submitEntry} 
              disabled={choice1 === 0 || choice2 === 0 || btnText === "Submitted!"}>{btnText}</button>
          </div>
        </div>
      );
    default:
    break;
  }
}

export default App;
