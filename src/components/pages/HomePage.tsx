import { useEffect, useState } from "react";
import HomePageTemplate from "../templates/HomePageTemplate";
import "../../styles/HomePage.scss";

import {
  AchievementRate,
  BodyWeightData,
  MealHistoryEntry,
} from "../../types/common";

import {
  navLinks,
  dropdownLinks,
  transitbuttons,
} from "../../constants/common";

import {
  fetchAchievementRate,
  fetchBodyWeightData,
  fetchMealHistory,
} from "../../api/common";

import {
  achievementRate as initAchievementRate,
  bodyWeightData as initBodyWeightData,
  mealHistory as initMealHistory,
} from "../../mockData/common";

const HomePage = () => {
  const [achievementRate, setAchievementRate] =
    useState<AchievementRate>(initAchievementRate);

  const [bodyWeightData, setBodyWeightData] =
    useState<BodyWeightData[]>(initBodyWeightData);

  const [mealHistory, setMealHistory] =
    useState<MealHistoryEntry[]>(initMealHistory);

  const onClickLoadMoreRecord = async (needLoadMore: boolean) => {
    await fetchMealHistory(needLoadMore)
      .then((data) => setMealHistory(data))
      .catch((error) => {});
  };

  useEffect(() => {
    fetchAchievementRate()
      .then((data) => setAchievementRate(data))
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error("Error fetching achievement rate:", error);
      });
  }, []);

  useEffect(() => {
    fetchBodyWeightData()
      .then((data) => setBodyWeightData(data))
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error("Error fetching body weight data:", error);
      });
  }, []);

  useEffect(() => {
    fetchMealHistory()
      .then((data) => setMealHistory(data))
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error("Error fetching meal history:", error);
      });
  }, []);

  return (
    <section className="HomePage wrapper page-container">
      <HomePageTemplate
        achievementRate={achievementRate}
        bodyWeightData={bodyWeightData}
        mealHistory={mealHistory}
        navLinks={navLinks}
        dropdownLinks={dropdownLinks}
        transitbuttons={transitbuttons}
        onClickLoadMoreRecord={onClickLoadMoreRecord}
      />
    </section>
  );
};

export default HomePage;
