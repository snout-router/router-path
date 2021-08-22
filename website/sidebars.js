module.exports = {
  docs: [
    {
      type: 'category',
      collapsed: false,
      label: 'Guides',
      items: [
        'guides/index',
        'guides/getting-started',
        'guides/path-patterns',
        'guides/custom-parameters',
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'API reference',
      items: [
        {
          type: 'category',
          collapsed: false,
          label: 'Functions',
          items: [
            'api/normalizeParam',
            'api/path',
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Types',
          items: [
            'api/type/AnyParam',
            'api/type/NormalizeParam',
            'api/type/Param',
            'api/type/ParamArg',
            'api/type/ParamName',
            'api/type/ParamOrString',
            'api/type/PathPattern',
          ],
        },
      ],
    },
  ],
}
