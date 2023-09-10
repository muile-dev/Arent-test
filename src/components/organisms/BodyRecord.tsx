import React from "react";
import BodyRecordImage from "../assets/images/myRecords/body_record.svg";

interface BodyRecordProps {
  //   bodyRecords: BodyRecord[];
}

const BodyRecord: React.FC<BodyRecordProps> = () => {
  return (
    <div className="body-record-wrapper">
      <img src={BodyRecordImage} alt="" />
    </div>
  );
};

export default BodyRecord;
