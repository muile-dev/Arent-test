import React from "react";
import "./../../styles/MyDiary.scss";

import { MyDiaryType } from "../../types/common";

import Button from "../../components/atoms/Button";

type MyDiaryProps = {
  diaries: MyDiaryType[];
  onClickLoadMoreRecord: (needLoadMore: boolean) => void;
};

const MyDiary: React.FC<MyDiaryProps> = ({
  diaries,
  onClickLoadMoreRecord,
}) => {
  const needLoadMore = diaries.length <= 8;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return (
      <>
        <p>{`${date.getFullYear()}.${
          date.getMonth() + 1
        } ${date.getDate()}`}</p>
        <span>
          {date.getHours()}.{date.getMinutes()}
        </span>
      </>
    );
  };

  return (
    <div className="my-diary-container">
      <div className="title">MY DIARY</div>
      <div className="diary-list">
        {diaries.map((entry, index) => (
          <div key={index} className="diary-item">
            <h3 className="date-time">{formatDate(entry.date)}</h3>
            <p className="title">{entry.title}</p>
            <p className="entry">{entry.entry}</p>
          </div>
        ))}
      </div>
      <Button
        className="btn btn-primary"
        onClick={(_) => onClickLoadMoreRecord(needLoadMore)}
      >
        {`${needLoadMore ? "自分の日記をもっと見る" : "あまり見せない"}`}
      </Button>
    </div>
  );
};

export default MyDiary;
