import {useTitleFormatter} from '@docusaurus/theme-common'
import OriginalSeo from '@theme-original/Seo'
import React from 'react'

export default function Seo (props) {
  const {children, ...rest} = props
  const {description, title} = rest
  const pageTitle = useTitleFormatter(title)

  return <OriginalSeo {...rest}>
    <meta property='og:type' content='website' />
    <meta property='og:site_name' content='Snout Router' />

    <meta property='og:image' content='https://snout.dev/open-graph.png' />
    <meta property='og:image:type' content='image/png' />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />
    <meta property='og:image:alt' content='A repeating pattern of isometric pig snouts' />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@SnoutRouter' />
    {title && <meta property='twitter:title' content={pageTitle} />}
    {description && <meta property='twitter:description' content={description} />}

    <meta name='twitter:image' content='https://snout.dev/twitter-card.png' />
    <meta name='twitter:image:alt' content='A repeating pattern of isometric pig snouts' />

    <meta name='theme-color' media='(prefers-color-scheme: dark)' content='hsl(350, 100%, 85%)' />
    <meta name='theme-color' media='(prefers-color-scheme: light)' content='hsl(350, 100%, 85%)' />

    <link rel='apple-touch-icon' href='https://snout.dev/apple-touch-icon-180x180.png' />
    <link rel='icon' type='image/png' href='https://snout.dev/favicon-32x32.png' sizes='32x32' />
    <link rel='icon' type='image/png' href='https://snout.dev/favicon-16x16.png' sizes='16x16' />
    <link rel='mask-icon' href='https://snout.dev/safari-mask-icon.svg' color='hsl(350, 100%, 85%)' />

    {children}
  </OriginalSeo>
}
