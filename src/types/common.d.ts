import { ReactNode } from "react";

export interface NavLink {
  label: string;
  url: string;
  icon: string;
  count?: number;
}

export interface MenuItem {
  title: string;
  url: string;
  active?: boolean;
}

interface AchievementRate {
  date: string;
  rate: number;
  image: string;
}

interface BodyWeightData {
  labels: string[];
  dataset1: number[];
  dataset2: number[];
}

interface MealHistoryEntry {
  date: string;
  meal: string;
  image: string;
}

interface Button {
  id?: string | number;
  label: string;
  icon: string;
}

interface Recommendation {
  title: string;
  buttonText: string;
  bgImage: string;
}

type MyExerciseType = {
  name: string;
  caloriesBurned: string;
  duration: string;
};

type MyDiaryType = {
  date: string;
  title: string;
  entry: string;
};

type ColumnType = {
  image: string;
  dateTime: string;
  description: string;
  tags: string[];
};
