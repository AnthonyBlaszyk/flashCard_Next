import React from "react";

type propsType = {
  data: {
    id: number;
    question: string;
    correctAnswer: string;
    wrongAnswerOne: string;
    wrongAnswerTwo: string;
    wrongAnswerThree: string;
  }[];
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  questionNumber: number;
  answerArray: string[];
};

export const GetChoiceCard = (props: propsType): JSX.Element => {
  return (
    <>
      {props.answerArray.map((answer) => {
        return (
          <div key={answer}>
            <div className="inputChoice">
              <input
                onChange={(element) => {
                  props.setAnswer(element.target.value);
                }}
                name="buttonRadio"
                type="radio"
                value={answer}
              />
              <label>{answer}</label>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const VerifyChoiceCard = (props: propsType): JSX.Element => {
  if (props.answer === props.data[props.questionNumber].correctAnswer) {
    return <p>Correct!</p>;
  } else {
    return <p>Wrong!</p>;
  }
};
