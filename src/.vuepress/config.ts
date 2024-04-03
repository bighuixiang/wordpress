import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "向大前端",
  description: "个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
