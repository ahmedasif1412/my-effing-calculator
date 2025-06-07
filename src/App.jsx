import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import "./App.css";
import { useState } from "react";

function App() {
  /*1. A state is declared in the parent component i.e App.jsx so that it can be passed in the child component. The useState gives us an array with two elements array[0] is the current value and array[1] is the function used to update the state. */
  /*2. calVal is the current value which is passed into the display component as a prop i.e displayValue = {calVal}. Note that we can use any name not just "displayValue" when passing the prop {calVal} but this same name i.e displayValue should be used inside the display function in the display component when we destructuring the displayValue  */
  /*3. In <ButtonsContainer/> we need to pass a behaviour from the child component to parent in the form of a function therefore we have created onButtonClick function which is passed in the ButtonContainer function as a parameter */
  let [calVal, setcalVal] = useState("");
  let onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setcalVal(result);
    } else if (buttonText === "←") {
      const newDisplay = [...calVal];
      newDisplay.pop();
      setcalVal(newDisplay.join(""));
    } else {
      let newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div id="calculator">
      <h1>Simple Calculator</h1>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
