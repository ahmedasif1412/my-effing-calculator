function ButtonsContainer({ onButtonClick }) {
  const buttonNames = [
    "C",
    "←",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  /* This onButtonClick is passed in the event listner "onClick" */
  return (
    <div id="buttonContainer">
      {buttonNames.map((buttonName) => (
        <button
          id="buttons"
          /* Here buttonName is unique key since all the operation is done on the basis on the button names being clicked. If you don't fix this you will get this error.
          "ButtonsContainer.jsx:23 Each child in a list should have a unique "key" prop. */
          key={buttonName}
          onClick={() => {
            onButtonClick(buttonName);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default ButtonsContainer;
