import React from "react";
import { Recommendation } from "../../types/common";

type RecommendContainerProps = {
  recommendations: Recommendation[];
};

const RecommendContainer: React.FC<RecommendContainerProps> = ({
  recommendations,
}) => {
  return (
    <div className="recommend-container">
      {recommendations.map((item, index) => (
        <div key={index} className="recommend-item">
          <div className="recommend-img-wapper">
            <img
              src={item.bgImage}
              alt={item.title}
              className="bg-image blur-image"
            />
          </div>
          <div className="recommend-content">
            <p>{item.title}</p>
            <button className="btn btn-primary">{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendContainer;
