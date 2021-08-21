import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import Feature from '../components/Feature.js'
import Features from '../components/Features.js'
import Hero from '../components/Hero.js'

export default function Home () {
  const context = useDocusaurusContext()
  const {siteConfig: {tagline, title} = {}} = context

  return <Layout title={title} description={tagline}>
    <Hero />

    <main>
      <Features>
        <Feature title='Tailored for purpose'>
          REPLACE_ME
        </Feature>

        <Feature title='Teeny tiny'>
          From day one, all <strong>Snout</strong> libraries have been written with a focus on minimizing bundle
          size impact.
        </Feature>

        <Feature title='No baggage'>
          <strong>Snout</strong> libraries don&apos;t attempt to directly support legacy browsers, which keeps
          things maintainable.
        </Feature>
      </Features>
    </main>
  </Layout>
}
