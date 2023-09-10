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
  // submenu?: MenuItemType[];
}

interface AchievementRate {
  date: string;
  rate: number;
  image: string;
}

interface BodyWeightData {
  date: string;
  weight: number;
  bodyFatPercentage: number;
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
