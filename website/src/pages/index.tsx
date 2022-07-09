import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'
import Feature from '../components/Feature'
import Features from '../components/Features'
import Hero from '../components/Hero'
import TryIt from '../components/TryIt'

export default function Home () {
  const context = useDocusaurusContext()
  const {siteConfig: {tagline} = {}} = context

  const dslUrl = 'https://wikipedia.org/wiki/Domain-specific_language'
  const typeInferenceUrl =
    'https://www.typescriptlang.org/docs/handbook/type-inference.html'

  return (
    <Layout description={tagline}>
      <Hero />

      <main>
        <Features>
          <Feature title='Teeny tiny'>
            A fully-featured router path implementation in{' '}
            <strong>less than 1kB</strong>. Out of the box,{' '}
            <strong>Snout Router Path</strong> comes with everything you need
            for <em>almost</em> any application.
          </Feature>

          <Feature title='Extensible'>
            Got an advanced use case? Powerful features like{' '}
            <Link to='/guides/custom-parameters'>custom parameters</Link> allow
            you to expand the capabilities of <strong>Snout Router Path</strong>{' '}
            to meet your needs.
          </Feature>

          <Feature title='No parser required'>
            Other router path implementations need to parse their own{' '}
            <Link title='Domain-specific language' to={dslUrl}>
              DSL
            </Link>
            , which comes with unavoidable complexity.{' '}
            <strong>Snout Router Path</strong> avoids this by letting your{' '}
            <em>language</em> do the parsing instead.
          </Feature>

          <Feature title='Type safety'>
            Don't wait until run-time to find out that you're using your routes
            wrong. <strong>Snout Router Path</strong> uses{' '}
            <Link to={typeInferenceUrl}>TypeScript type inference</Link> so you
            always know what your route arguments are.
          </Feature>
        </Features>

        <TryIt />
      </main>
    </Layout>
  )
}
