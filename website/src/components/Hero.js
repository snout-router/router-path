import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './Hero.module.css'

export default function Hero () {
  const context = useDocusaurusContext()
  const {siteConfig: {tagline, title} = {}} = context

  return <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className='container'>
      <h1 className='hero__title'>{title}</h1>
      <p className='hero__subtitle'>{tagline}</p>

      <div className={styles.buttons}>
        <Link className='button button--outline button--secondary button--lg' to={useBaseUrl('guides/getting-started')}>
          Get started
        </Link>
      </div>
    </div>
  </header>
}
