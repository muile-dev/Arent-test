import { FC } from "react";
import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";

import AchievementRateComponent from "../organisms/AchievementRate";
import MealHistory from "../organisms/MealHistory";
import BodyWeightChart from "../organisms/BodyWeightChart";
import HexagonButton from "../../components/atoms/HexagonButton";
import ScrollToTopButton from "../../components/atoms/ScrollToTopButton";

import {
  NavLink,
  MenuItem,
  AchievementRate,
  BodyWeightData,
  MealHistoryEntry,
  Button,
} from "../../types/common";

export interface HomePageTempateProps {
  handleOnNavLink: (url: string) => void;
  achievementRate: AchievementRate;
  bodyWeightData: BodyWeightData;
  mealHistory: MealHistoryEntry[];
  navLinks: NavLink[];
  dropdownLinks: MenuItem[];
  transitbuttons: Button[];
  onClickLoadMoreRecord: (needLoadMore: boolean) => void;
}

const HomePageTempate: FC<HomePageTempateProps> = ({
  handleOnNavLink,
  navLinks,
  dropdownLinks,
  achievementRate,
  bodyWeightData,
  mealHistory,
  transitbuttons,
  onClickLoadMoreRecord,
}) => {

  return (
    <div className="HomePageTempate main-page-container">
      <div className="content">
        <Header
          navLinks={navLinks}
          dropdownLinks={dropdownLinks}
          handleOnNavLink={handleOnNavLink}
        />
        <div className="main-top">
          <AchievementRateComponent achievementRate={achievementRate} />
          <div className="body-weight-data">
            <BodyWeightChart {...bodyWeightData} />
          </div>
        </div>
        <div className="main-body">
          <div className="button-transit-input">
            {transitbuttons.map((button, index) => (
              <HexagonButton key={index}>
                <div className="btn btn-content">
                  <img src={button.icon} alt={button.label} />
                  <div className="text">{button.label}</div>
                </div>
              </HexagonButton>
            ))}
          </div>
          <div className="meal-history-wrapper">
            <MealHistory
              meals={mealHistory}
              onClickLoadMoreRecord={onClickLoadMoreRecord}
            />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePageTempate;
