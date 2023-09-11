import React from "react";
import BodyWeightChart from "./BodyWeightChart";

interface BodyRecordProps {
  //   bodyRecords: BodyRecord[];
}

const BodyRecord: React.FC<BodyRecordProps> = () => {
  const labels = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ];
  const dataset1 = [30, 20, 21, 30, 31, 31, 31, 31, 22, 21, 29, 30];
  const dataset2 = [30, 23, 27, 27, 31, 22, 27, 28, 40, 41, 42, 43];

  return (
    <div className="body-record-wrapper">
      <div className="title">
        BODY
        <br /> RECORD <span className="date">2021.05.21</span>
      </div>
      <div className="graph-container">
        <BodyWeightChart
          labels={labels}
          dataset1={dataset1}
          dataset2={dataset2}
        />
      </div>
      <div className="button-list">
        <button type="button" className="btn btn-light">
          日
        </button>
        <button type="button" className="btn btn-light">
          週
        </button>
        <button type="button" className="btn btn-light">
          月
        </button>
        <button type="button" className="btn btn-primary">
          年
        </button>
      </div>
    </div>
  );
};

export default BodyRecord;
