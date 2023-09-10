import React from "react";
import "./../../styles/MyExercise.scss";

import { MyExerciseType } from "../../types/common";

type MyExerciseProps = {
  exercises: MyExerciseType[];
};

const MyExercise: React.FC<MyExerciseProps> = ({ exercises }) => {
  return (
    <div className="my-exercise">
      <div className="title">
        MY
        <br /> EXERCISE <span className="date">2021.05.21</span>
      </div>
      <div className="grid-container custom-scrollbar">
        {exercises.map((exercise, index) => (
          <div key={index} className="grid-item">
            <ul>
              <li>
                <div className="row">
                  <div className="col-left">
                    <p>{exercise.name}</p>
                    <span>{exercise.caloriesBurned}</span>
                  </div>
                  <div className="col-right">{exercise.duration}</div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
