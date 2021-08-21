import React from 'react'

export default function Feature ({children, title}) {
  return <div className='col col--4'>
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
}
