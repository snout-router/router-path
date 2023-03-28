module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "category",
      collapsed: false,
      label: "Guides",
      link: {
        type: "doc",
        id: "guides/guides",
      },
      items: ["guides/path-patterns", "guides/custom-parameters"],
    },
    {
      type: "category",
      collapsed: false,
      label: "API reference",
      link: {
        type: "generated-index",
        slug: "/api",
      },
      items: [
        {
          type: "category",
          collapsed: false,
          label: "Functions",
          link: {
            type: "generated-index",
            slug: "/api/function",
          },
          items: ["api/normalizeParam", "api/path"],
        },
        {
          type: "category",
          collapsed: false,
          label: "Types",
          link: {
            type: "generated-index",
            slug: "/api/type",
          },
          items: [
            "api/type/AnyParam",
            "api/type/NormalizeParam",
            "api/type/Param",
            "api/type/ParamArg",
            "api/type/ParamName",
            "api/type/ParamOrString",
            "api/type/PathPattern",
          ],
        },
      ],
    },
  ],
};
