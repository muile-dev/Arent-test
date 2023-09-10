import React from "react";

import { AchievementRate } from "../../types/common";
import PercentageCircle from "../atoms/PercentageCircle";

interface AchievementRateProps {
  achievementRate: AchievementRate;
}

const AchievementRateComponent: React.FC<AchievementRateProps> = ({
  achievementRate,
}) => {
  return (
    <div className="achivement">
      <img
        src={achievementRate.image}
        className="bg-image"
        alt="achivement rate"
      />
      <div className="achivement-value">
        <PercentageCircle
          percentage={75}
          strokeWidth={3}
          size={181}
          date="05/21"
        />
      </div>
    </div>
  );
};

export default AchievementRateComponent;
