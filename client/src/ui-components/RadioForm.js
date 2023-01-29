import React from "react";

const RadioForm = () => {
  return (
    <div>
      <p>Select your most important financial goals</p>
      <div><input type="radio" name="goals" value="Option1"></input><label for="Option1">Option1</label></div>
      <div><input type="radio" name="goals" value="Option2"></input><label for="Option2">Option2</label></div>
      <div><input type="radio" name="goals" value="Option3"></input><label for="Option3">Option3</label></div>
    </div>
  )
}

export default RadioForm;