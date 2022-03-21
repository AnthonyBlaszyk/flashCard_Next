import Link from "next/link";
import React from "react";
import dataJson from "../../component/data.json";
import { Layout } from "../../component/layout";

export const MentalCard = (): JSX.Element => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <Layout>
      <p>
        Question number :
        <Link href="/mentalFlashCard/1">
          <a>1</a>
        </Link>
        <Link href="/mentalFlashCard/2">
          <a>2</a>
        </Link>
        <Link href="/mentalFlashCard/3">
          <a>3</a>
        </Link>
        <Link href="/mentalFlashCard/4">
          <a>4</a>
        </Link>
      </p>
      <div className="card">
        <h3>{dataJson.data[0].question}</h3>
        <div className="underCard">
          <>
            {showAnswer ? (
              <p className="showAnswer">{dataJson.data[0].correctAnswer}</p>
            ) : (
              <p className="hideAnswer">{dataJson.data[0].correctAnswer}</p>
            )}
            <button
              className="btn btn-outline-info"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          </>
        </div>
      </div>
    </Layout>
  );
};

export default MentalCard;
