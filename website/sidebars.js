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
      items: [
        {
          type: "category",
          collapsed: false,
          label: "Functions",
          items: ["api/normalizeParam", "api/path"],
        },
        {
          type: "category",
          collapsed: false,
          label: "Types",
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
