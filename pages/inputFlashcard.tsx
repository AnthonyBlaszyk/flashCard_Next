import React from "react";
import dataJson from "../component/data.json";
import { GetInput, VerifyInput } from "../component/GetInputCard";
import { Layout } from "../component/layout";

const InputCard = (): JSX.Element => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [submitedAnswer, setSubmitedAnswer] = React.useState(false);
  const [answer, setAnswer] = React.useState("");

  console.log(dataJson.data);

  return (
    <Layout>
      <div className="card">
        <h3>{dataJson.data[questionNumber].question}</h3>
        <div className="underCard">
          {submitedAnswer ? (
            <VerifyInput
              data={dataJson.data}
              answer={answer}
              setAnswer={setAnswer}
              questionNumber={questionNumber}
            />
          ) : (
            <GetInput
              data={dataJson.data}
              answer={answer}
              setAnswer={setAnswer}
              questionNumber={questionNumber}
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

export default InputCard;
