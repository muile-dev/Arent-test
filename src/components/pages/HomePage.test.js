import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import {
  fetchAchievementRate,
  fetchBodyWeightData,
  fetchMealHistory,
} from "../../api/common";
import {
  achievementRate as mockAchievementRate,
  bodyRecords as mockBodyWeightData,
  mealHistory as mockMealHistory,
} from "../../mockData/common";

jest.mock("../../api/common", () => ({
  fetchAchievementRate: jest.fn(),
  fetchBodyWeightData: jest.fn(),
  fetchMealHistory: jest.fn(),
}));

describe("HomePage", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders the home page with data", async () => {
    fetchAchievementRate.mockResolvedValue(mockAchievementRate);
    fetchBodyWeightData.mockResolvedValue(mockBodyWeightData);
    fetchMealHistory.mockResolvedValue(mockMealHistory);

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText("記録をもっと見る")).toBeInTheDocument();
      expect(screen.getByText("Morning")).toBeInTheDocument();
      expect(screen.getByText("Lunch")).toBeInTheDocument();
    });
  });
});
