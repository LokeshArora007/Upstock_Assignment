import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PagesIcon from "@material-ui/icons/Pages";
import { MainLayout } from "../layout";
import { HomePage, LiveStockPage } from "../pages";

export const routes = [
  {
    label: "Home",
    path: "/",
    page: HomePage,
    layoutType: MainLayout,
    asMenu: true,
    icon: <HomeIcon />,
  },
  {
    label: "Live Stock",
    path: "/livestock",
    page: LiveStockPage,
    layoutType: MainLayout,
    asMenu: true,
    icon: <PagesIcon />,
  },
];
