import React from "react";
import { MealHistoryEntry } from "src/types/common";
import Button from "../../components/atoms/Button";

interface MealHistoryProps {
  meals: MealHistoryEntry[];
  onClickLoadMoreRecord: (needLoadMore: boolean) => void;
}

const MealHistory: React.FC<MealHistoryProps> = ({
  meals,
  onClickLoadMoreRecord,
}) => {
  const needLoadMore = meals.length <= 8;
  const renderRecord = (record: MealHistoryEntry, index: number) => {
    // const date = new Date(record.date);
    // const dateFormat = `${date.getMonth() + 1}.${date.getDate()}`;

    return (
      <div className="record-item" key={index}>
        <img src={record.image} alt={record.meal} className="pg-image" />
      </div>
    );
  };

  return (
    <div className="record-history-container">
      <div className="record-list">
        {meals.map((record, index) => renderRecord(record, index))}
      </div>
      <Button
        className="btn btn-primary"
        onClick={(_) => onClickLoadMoreRecord(needLoadMore)}
      >
        {`${needLoadMore ? "記録をもっと見る" : "表示を少なくする"}`}
      </Button>
    </div>
  );
};

export default MealHistory;
