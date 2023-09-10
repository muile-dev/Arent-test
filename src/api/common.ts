import {
  AchievementRate,
  BodyWeightData,
  MyExerciseType,
  MealHistoryEntry,
  Recommendation,
  MyDiaryType,
  ColumnType,
} from "../types/common";

import {
  achievementRate,
  bodyWeightData,
  mealHistory,
  recommendList,
  myExerciseList,
  myDiariesList,
  columnsRecommendations,
  columnList,
} from "../mockData/common";

export async function fetchAchievementRate(): Promise<AchievementRate> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(achievementRate), 1000); // Simulating a delay of 1 second
  });
}

export async function fetchBodyWeightData(): Promise<BodyWeightData[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(bodyWeightData), 1000); // Simulating a delay of 1 second
  });
}

export async function fetchMealHistory(
  fetchMore = false
): Promise<MealHistoryEntry[]> {
  // Simulate API call and return mock meal history
  return new Promise((resolve) => {
    setTimeout(() => resolve(mealHistory(fetchMore)), 200);
  });
}

export async function fetchRecommendations(): Promise<Recommendation[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(recommendList), 200); // Simulating a delay of 200 second
  });
}

export async function fetchMyExercises(): Promise<MyExerciseType[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(myExerciseList), 200); // Simulating a delay of 200 second
  });
}

export async function fetchMydiaries(
  needLoadMore = false
): Promise<MyDiaryType[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(myDiariesList(needLoadMore)), 200); // Simulating a delay of 200 second
  });
}

export async function fetchColumnsRecommendations(): Promise<Recommendation[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(columnsRecommendations), 200); // Simulating a delay of 200 second
  });
}

export async function fetchColumns(fetchMore = false): Promise<ColumnType[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(columnList(fetchMore)), 200);
  });
}
