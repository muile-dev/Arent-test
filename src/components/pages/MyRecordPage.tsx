import { useState, useEffect } from "react";
import "../../styles/MyRecordPage.scss";

import { navLinks, dropdownLinks } from "../../constants/common";

import {
  Recommendation,
  MyExerciseType,
  MyDiaryType,
} from "../../types/common";

import MyRecordPageTemplate from "../templates/MyRecordPageTemplate";

import {
  fetchRecommendations,
  fetchMyExercises,
  fetchMydiaries,
} from "../../api/common";

const MyRecordPage = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [exercises, setExercises] = useState<MyExerciseType[]>([]);
  const [diaries, setDiaries] = useState<MyDiaryType[]>([]);

  useEffect(() => {
    fetchRecommendations()
      .then((data) => setRecommendations(data))
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
      });
  }, []);

  useEffect(() => {
    fetchMyExercises()
      .then((data) => setExercises(data))
      .catch((error) => {
        console.error("Error fetching exercies", error);
      });
  }, []);

  useEffect(() => {
    fetchMydiaries()
      .then((data) => setDiaries(data))
      .catch((error) => {
        console.error("Error fetching my diary", error);
      });
  }, []);

  const onClickLoadMoreRecord = async (needLoadMore: boolean) => {
    await fetchMydiaries(needLoadMore)
      .then((data) => setDiaries(data))
      .catch((error) => {});
  };

  return (
    <section className="MyRecord wrapper">
      <MyRecordPageTemplate
        recommendations={recommendations}
        navLinks={navLinks}
        dropdownLinks={dropdownLinks}
        exercises={exercises}
        diaries={diaries}
        onClickLoadMoreRecord={onClickLoadMoreRecord}
      />
    </section>
  );
};

export default MyRecordPage;
