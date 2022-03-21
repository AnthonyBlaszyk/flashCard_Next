import React from "react";

type typeProps = {
  data: {
    id: number;
    question: string;
    correctAnswer: string;
    wrongAnswerOne: string;
    wrongAnswerTwo: string;
    wrongAnswerThree: string;
  };
  randomNumber: number;
};

export const GetMentalCard = (props: typeProps) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => {
    setShowAnswer(false);
  }, [props.randomNumber]);

  return (
    <>
      {showAnswer ? (
        <p className="showAnswer">{props.data.correctAnswer}</p>
      ) : (
        <p className="hideAnswer">{props.data.correctAnswer}</p>
      )}
      <button
        className="btn btn-outline-info"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </>
  );
};
