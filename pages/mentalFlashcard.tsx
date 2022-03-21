import React from "react";
import { GetMentalCard } from "../component/GetMentalCard";
import dataJson from "../component/data.json";
import { Layout } from "../component/layout";
import Link from "next/link";

export const MentalCard = (): JSX.Element => {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * dataJson.data.length)
  );

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
        <h3>{dataJson.data[randomNumber].question}</h3>
        <div className="underCard">
          <GetMentalCard
            data={dataJson.data[randomNumber]}
            randomNumber={randomNumber}
          />
          <button
            onClick={() =>
              setRandomNumber(Math.floor(Math.random() * dataJson.data.length))
            }
          >
            Next Question
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MentalCard;
