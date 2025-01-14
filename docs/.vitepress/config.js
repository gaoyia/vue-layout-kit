// .vitepress/config.js
export default {
  lang: "zh-CN",
  // 站点级选项
  title: "vue-layout-kit",
  description: "vue-layout-kit",

  themeConfig: {
    // 主题级选项
    // docsDir: "docs",
    // logo: "/logo.png",
    // 编辑连接
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    // 最后更新时间
    lastUpdatedText: "最后更新时间",
    repo: "https://github.com/gaoyia/vue-layout-kit",
    nav: [
      { text: "指南", link: "/guide/", activeMatch: "^/guide/" },
      { text: "组件", link: "/components/", activeMatch: "^/components/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速上手", link: "/guide/quickstart" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "LayoutFit", link: "/components/LayoutFit" },
          ],
        },
      ],
    },
    footer: {
      message: "footer message",
      copyright: "copyright",
    },
  },
};
