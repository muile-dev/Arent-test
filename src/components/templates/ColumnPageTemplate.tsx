import { FC } from "react";
import Header from "../molecules/Header";
import Footer from "../../components/molecules/Footer";
import ScrollToTopButton from "../../components/atoms/ScrollToTopButton";
import Button from "../../components/atoms/Button";

import {
  NavLink,
  MenuItem,
  Recommendation,
  ColumnType,
} from "src/types/common";

export interface ColumnPageTemplateProps {
  navLinks: NavLink[];
  dropdownLinks: MenuItem[];
  columnRecommendations: Recommendation[];
  columns: ColumnType[];
  onClickLoadMoreRecord: (needLoadMore: boolean) => void;
  handleOnNavLink: (url: string) => void;
}

const ColumnPageTemplate: FC<ColumnPageTemplateProps> = ({
  handleOnNavLink,
  navLinks,
  dropdownLinks,
  columnRecommendations,
  columns,
  onClickLoadMoreRecord,
}) => {
  const renderRecommendation = (recommend: Recommendation, index: number) => {
    return (
      <div key={index} className="recommend-item">
        <div className="title">{recommend.title}</div>
        <hr className="horizontal-v" />
        <div className="text">{recommend.buttonText}</div>
      </div>
    );
  };

  const renderColumn = (column: ColumnType, index: number) => {
    return (
      <div key={index} className="column-item">
        <div className="column-view">
          <img src={column.image} alt="column pg" className="bg-image" />
          <div className="date-time">{column.dateTime}</div>
        </div>
        <div className="description">{column.description}</div>
        <div className="tags">{column.tags.join("  ")}</div>
      </div>
    );
  };

  const needLoadMore = columns.length <= 8;

  return (
    <div className="ColumnPageTemplate main-page-container">
      <Header
        navLinks={navLinks}
        dropdownLinks={dropdownLinks}
        handleOnNavLink={handleOnNavLink}
      />
      <div className="content">
        <div className="recommend-list grid-view">
          {columnRecommendations.map((recommend, index) =>
            renderRecommendation(recommend, index)
          )}
        </div>
        <div className="column-container">
          <div className="column-list">
            {columns.map((column, index) => renderColumn(column, index))}
          </div>
          <Button
            className="btn btn-primary"
            onClick={(_) => onClickLoadMoreRecord(needLoadMore)}
          >
            {`${needLoadMore ? "コラムをもっと見る" : "あまり見せない"}`}
          </Button>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ColumnPageTemplate;
