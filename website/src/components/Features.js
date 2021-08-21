import React from 'react'

import styles from './Features.module.css'

export default function Features ({children}) {
  return <section className={styles.features}>
    <div className='container'>
      <div className='row'>{children}</div>
    </div>
  </section>
}
