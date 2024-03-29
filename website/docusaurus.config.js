const { createConfig } = require("@snout/docusaurus-config");

module.exports = createConfig({
  rootPath: __dirname,
  title: "Snout Router Path",
  redirects: [
    {
      from: "/guides/getting-started",
      to: "/getting-started",
    },
  ],
  navbarItems: [
    {
      to: "getting-started",
      label: "Getting started",
      position: "right",
    },
    {
      to: "guides",
      label: "Guides",
      position: "right",
    },
    {
      to: "api",
      label: "API",
      position: "right",
    },
  ],
  footerLinks: [
    {
      title: "Docs",
      items: [
        {
          label: "Guides",
          to: "guides",
        },
        {
          label: "API reference",
          to: "api",
        },
      ],
    },
  ],
});
