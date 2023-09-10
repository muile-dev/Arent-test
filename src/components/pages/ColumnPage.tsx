import { useState, useEffect } from "react";
import "../../styles/ColumnPage.scss";
import ColumnPageTemplate from "../templates/ColumnPageTemplate";

import { navLinks, dropdownLinks } from "../../constants/common";
import { Recommendation, ColumnType } from "../../types/common";

import { fetchColumnsRecommendations, fetchColumns } from "../../api/common";

const ColumnPage = () => {
  const [columnRecommendations, setColumnRecommendations] = useState<
    Recommendation[]
  >([]);
  const [columns, setColumns] = useState<ColumnType[]>([]);

  useEffect(() => {
    fetchColumnsRecommendations()
      .then((data) => setColumnRecommendations(data))
      .catch((error) => {
        console.error("Error fetching column recommendations:", error);
      });
  }, []);

  useEffect(() => {
    fetchColumns()
      .then((data) => setColumns(data))
      .catch((error) => {
        console.error("Error fetching column recommendations:", error);
      });
  }, []);

  const onClickLoadMoreRecord = async (needLoadMore: boolean) => {
    await fetchColumns(needLoadMore)
      .then((data) => setColumns(data))
      .catch((error) => {});
  };

  return (
    <section className="ColumnPage wrapper page-container">
      <ColumnPageTemplate
        navLinks={navLinks}
        dropdownLinks={dropdownLinks}
        columnRecommendations={columnRecommendations}
        columns={columns}
        onClickLoadMoreRecord={onClickLoadMoreRecord}
      />
    </section>
  );
};

export default ColumnPage;
