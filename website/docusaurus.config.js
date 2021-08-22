const {createConfig} = require('@snout/docusaurus-config')

module.exports = createConfig({
  rootPath: __dirname,
  title: 'Snout Router Path',
  redirects: [
    {
      from: '/api',
      to: '/api/path',
    },
  ],
  navbarItems: [
    {
      to: 'guides/getting-started',
      label: 'Getting started',
      position: 'right',
    },
    {
      to: 'guides/index',
      label: 'Guides',
      position: 'right',
    },
    {
      to: 'api/path',
      label: 'API',
      position: 'right',
    },
  ],
  footerLinks: [
    {
      title: 'Docs',
      items: [
        {
          label: 'Guides',
          to: 'guides/index',
        },
        {
          label: 'API reference',
          to: 'api/path',
        },
      ],
    },
  ],
})
