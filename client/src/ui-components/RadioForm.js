import React from "react";

const RadioForm = (props) => {
  const changeSelection = (e) => {
    props.setChoice(e.target.value);
  }

  return (
    <div>
      <p>Select your most important financial goals</p>
      <div className="inline">
        <input type="radio" name={props.name} value="1" onChange={changeSelection}></input>
        <label htmlFor="Option1">Option1</label>
      </div>
      <div className="inline">
        <input type="radio" name={props.name} value="2" onChange={changeSelection}></input>
        <label htmlFor="Option2">Option2</label>
      </div>
      <div className="inline">
        <input type="radio" name={props.name} value="3" onChange={changeSelection}></input>
        <label htmlFor="Option3">Option3</label>
      </div>
    </div>
  )
}

export default RadioForm;