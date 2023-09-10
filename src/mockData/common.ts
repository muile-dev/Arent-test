import AchivementRateImage from "../components/assets/images/home/main_photo.svg";
import Record1 from "../components/assets/images/records/record_1.svg";
import Record2 from "../components/assets/images/records/record_2.svg";
import Record3 from "../components/assets/images/records/record_3.svg";
import Record4 from "../components/assets/images/records/record_4.svg";
import Record5 from "../components/assets/images/records/record_5.svg";
import Record6 from "../components/assets/images/records/record_6.svg";
import Record7 from "../components/assets/images/records/record_7.svg";
import Record8 from "../components/assets/images/records/record_8.svg";

import MyRecommend1 from "../components/assets/images/myRecords/MyRecommend1.jpg";
import MyRecommend2 from "../components/assets/images/myRecords/MyRecommend2.jpg";
import MyRecommend3 from "../components/assets/images/myRecords/MyRecommend3.jpg";

import Column1 from "../components/assets/images/columns/column-1.jpg";
import Column2 from "../components/assets/images/columns/column-2.jpg";
import Column3 from "../components/assets/images/columns/column-3.jpg";
import Column4 from "../components/assets/images/columns/column-4.jpg";
import Column5 from "../components/assets/images/columns/column-5.jpg";
import Column6 from "../components/assets/images/columns/column-6.jpg";
import Column7 from "../components/assets/images/columns/column-7.jpg";
import Column8 from "../components/assets/images/columns/column-8.jpg";

import {
  AchievementRate,
  BodyWeightData,
  MyExerciseType,
  MealHistoryEntry,
  Recommendation,
  MyDiaryType,
  ColumnType,
} from "src/types/common";

export const achievementRate: AchievementRate = {
  date: "2023-09-10",
  rate: 75,
  image: AchivementRateImage,
};

export const bodyWeightData: BodyWeightData[] = [
  { date: "2023-09-01", weight: 70, bodyFatPercentage: 20 },
  { date: "2023-09-05", weight: 69, bodyFatPercentage: 19 },
  { date: "2023-09-10", weight: 68, bodyFatPercentage: 18 },
];

export const mealHistory = (fetchMore = false): MealHistoryEntry[] => {
  const response = [
    { date: "2023-05-21", meal: "Morning", image: Record1 },
    { date: "2023-05-21", meal: "Lunch", image: Record2 },
    { date: "2023-05-21", meal: "Dinner", image: Record3 },
    { date: "2023-05-21", meal: "Snack", image: Record4 },
    { date: "2023-05-20", meal: "Morning", image: Record5 },
    { date: "2023-05-20", meal: "Lunch", image: Record6 },
    { date: "2023-05-20", meal: "Dinner", image: Record7 },
    { date: "2023-05-20", meal: "Snake", image: Record8 },
  ];

  return fetchMore ? response.concat(response) : response;
};

export const recommendList: Recommendation[] = [
  {
    title: "BODY RECORD",
    buttonText: "自分のカラダの記録",
    bgImage: MyRecommend1,
  },
  {
    title: "MY EXCERCISE",
    buttonText: "自分の運動の記録",
    bgImage: MyRecommend2,
  },
  {
    title: "MY DIARY",
    buttonText: "自分の日記",
    bgImage: MyRecommend3,
  },
];

export const myExerciseList: MyExerciseType[] = [
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
  {
    name: "家事全般（立位・軽い）",
    caloriesBurned: "26kcal",
    duration: "10 min",
  },
];

export const myDiariesList = (needLoadMore = false): MyDiaryType[] => {
  const response = [
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      date: "2021.05.21 23:25",
      title: "私の日記の記録が一部表示されます。",
      entry:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];
  return needLoadMore ? response.concat(response) : response;
};

export const columnsRecommendations: Recommendation[] = [
  {
    title: "RECOMMENDED COLUMN",
    buttonText: "オススメ",
    bgImage: "",
  },
  {
    title: "RECOMMENDED DIET",
    buttonText: "ダイエット",
    bgImage: "",
  },
  {
    title: "RECOMMENDED BEAUTY",
    buttonText: "美容",
    bgImage: "",
  },
  {
    title: "RECOMMENDED HEALTH",
    buttonText: "健康",
    bgImage: "",
  },
];

export const columnList = (fetchMore = false): ColumnType[] => {
  const response = [
    {
      image: Column1,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column2,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column3,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column4,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column5,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column6,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column7,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
    {
      image: Column8,
      dateTime: "2021.05.17 23:25",
      description:
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tags: ["#魚料理", "#和食", "#DHA"],
    },
  ];

  return fetchMore ? response.concat(response) : response;
};
