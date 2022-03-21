import React from "react";
import { GetChoiceCard, VerifyChoiceCard } from "../component/GetChoicesCard";
import dataJson from "../component/data.json";
import { Layout } from "../component/layout";
import Link from "next/link";

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const ChoicesFlashcard = (): JSX.Element => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [submitedAnswer, setSubmitedAnswer] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const [answerArray, setAnswerArray] = React.useState([
    dataJson.data[questionNumber].correctAnswer,
    dataJson.data[questionNumber].wrongAnswerOne,
    dataJson.data[questionNumber].wrongAnswerTwo,
    dataJson.data[questionNumber].wrongAnswerThree,
  ]);

  React.useEffect(() => {
    setAnswerArray(
      shuffleArray([
        dataJson.data[questionNumber].correctAnswer,
        dataJson.data[questionNumber].wrongAnswerOne,
        dataJson.data[questionNumber].wrongAnswerTwo,
        dataJson.data[questionNumber].wrongAnswerThree,
      ])
    );
  }, [questionNumber]);

  return (
    <Layout>
      <div className="card">
        <h3>{dataJson.data[questionNumber].question}</h3>

        <div className="underCard">
          {submitedAnswer ? (
            <VerifyChoiceCard
              data={dataJson.data}
              answer={answer}
              setAnswer={setAnswer}
              questionNumber={questionNumber}
              answerArray={answerArray}
            />
          ) : (
            <GetChoiceCard
              data={dataJson.data}
              answer={answer}
              setAnswer={setAnswer}
              questionNumber={questionNumber}
              answerArray={answerArray}
            />
          )}
          <button
            onClick={() => {
              if (submitedAnswer) {
                questionNumber < dataJson.data.length - 1
                  ? setQuestionNumber(questionNumber + 1)
                  : setQuestionNumber(0);
                setAnswer("");
              }
              setSubmitedAnswer(!submitedAnswer);
            }}
          >
            {submitedAnswer ? "Next question" : "Submit answer"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ChoicesFlashcard;
