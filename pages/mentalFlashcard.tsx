import React from "react";
import { GetMentalCard } from "../component/GetMentalCard";
import dataJson from "../component/data.json";
import { Layout } from "../component/layout";

export const MentalCard = (): JSX.Element => {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * dataJson.data.length)
  );

  return (
    <Layout>
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
