import knifeIcon from "../components/assets/icons/knife.svg";
import cupIcon from "../components/assets/icons/cup.svg";
import MemoIcon from "../components/assets/icons/memo.svg";
import ChallengeIcon from "../components/assets/icons/challenge.svg";
import InfoIcon from "../components/assets/icons/info.svg";

import { MenuItem } from "src/types/common";

export const ROUTES = {
  MY_RECORD: "/my-record",
  WEIGHT_GRAPH: "/weight-graph",
  GOAL: "/goal",
  SELECTED_COURSE: "/selected-course",
  COLUMNS: "/columns",
  SETTING: "/setting",
};

export const navLinks = [
  { label: "自分の記録", url: ROUTES.MY_RECORD, icon: MemoIcon, active: false },
  {
    label: "チャレンジ",
    url: "/challenge",
    icon: ChallengeIcon,
    active: false,
  },
  {
    label: "お知らせ",
    url: "/notice",
    icon: InfoIcon,
    count: 1,
    active: false,
  },
];

export const dropdownLinks: MenuItem[] = [
  { title: "自分の記録", url: ROUTES.MY_RECORD },
  { title: "体重グラフ", url: ROUTES.WEIGHT_GRAPH },
  { title: "目標", url: ROUTES.GOAL },
  { title: "選択中のコース", url: ROUTES.SELECTED_COURSE },
  { title: "コラム一覧", url: ROUTES.COLUMNS },
  { title: "設定", url: ROUTES.SETTING },
];

export const transitbuttons = [
  { id: 1, label: "Morning", icon: knifeIcon },
  { id: 2, label: "Lunch", icon: knifeIcon },
  { id: 3, label: "Dinner", icon: knifeIcon },
  { id: 4, label: "Snack", icon: cupIcon },
];

export const footerLinks = [
  { label: "会員登録", url: "/#" },
  { label: "運営会社", url: "/#" },
  { label: "利用規約", url: "/#" },
  { label: "個人情報の取扱について", url: "/#" },
  { label: "特定商取引法に基づく表記", url: "/#" },
  { label: "お問い合わせ", url: "/#" },
];
