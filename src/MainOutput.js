import React from "react";

const MainOutput = ({ addClick, type, question, radio, check }) => {
  return addClick == true ? (
    type == "single" ? (
      <>
        {question.map((item) => item)}

        {radio.map((item, id) => (
          <>
            <br />
            <input type="radio" id={id} name="single"></input>
            <label for={id}>{item}</label>
            <br />
          </>
        ))}
      </>
    ) : (
      <>
        {question.map((item) => item)}
        {check.map((item, id) => (
          <>
            <br />

            <input type="checkbox" id={id}></input>
            <label for={id}>{item}</label>
            <br />
          </>
        ))}
      </>
    )
  ) : (
    <></>
  );
};

export default MainOutput;
