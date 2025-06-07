function Display({ displayValue }) {
  /* In line number 3 the destructured value of displayValue is passed as value is the input element and also "readonly" is passed as an attribute so that the user cannot enter any value in the display and only values are displayed */
  return <input type="text" id="display" value={displayValue} readOnly />;
}
export default Display;
