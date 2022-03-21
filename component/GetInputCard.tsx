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
};

export const GetInput = (props: propsType): JSX.Element => {
  return (
    <form>
      <div>
        <input
          onChange={(element) => props.setAnswer(element.target.value)}
          placeholder="Enter your answer"
          value={props.answer}
        />
      </div>
    </form>
  );
};

export const VerifyInput = (props: propsType): JSX.Element => {
  if (
    props.answer.toLowerCase() ===
    props.data[props.questionNumber].correctAnswer.toLowerCase()
  ) {
    return (
      <div>
        <p>Correct!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Wrong!</p>
      </div>
    );
  }
};
