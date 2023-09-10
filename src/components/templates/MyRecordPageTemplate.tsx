import { FC } from "react";
import Header from "../molecules/Header";
import {
  NavLink,
  MenuItem,
  Recommendation,
  MyExerciseType,
  MyDiaryType,
} from "src/types/common";

import RecommendContainer from "../organisms/RecommendContainer";
import BodyRecord from "../organisms/BodyRecord";
import MyExercise from "../organisms/MyExercise";
import MyDiary from "../organisms/MyDiary";
import Footer from "../../components/molecules/Footer";
import ScrollToTopButton from "../../components/atoms/ScrollToTopButton";

export interface MyRecordPageTemplateProps {
  navLinks: NavLink[];
  dropdownLinks: MenuItem[];
  recommendations: Recommendation[];
  exercises: MyExerciseType[];
  diaries: MyDiaryType[];
  onClickLoadMoreRecord: (needLoadMore: boolean) => void;
}

const MyRecordPageTemplate: FC<MyRecordPageTemplateProps> = ({
  navLinks,
  dropdownLinks,
  recommendations,
  exercises,
  diaries,
  onClickLoadMoreRecord,
}) => {
  return (
    <div className="MyRecordPageTempate main-page-container">
      <Header navLinks={navLinks} dropdownLinks={dropdownLinks} />
      <div className="MyRecord-main-page">
        <RecommendContainer recommendations={recommendations} />
        <BodyRecord />
        <MyExercise exercises={exercises} />
        <MyDiary
          diaries={diaries}
          onClickLoadMoreRecord={onClickLoadMoreRecord}
        />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MyRecordPageTemplate;
