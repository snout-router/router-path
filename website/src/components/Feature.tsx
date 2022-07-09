import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
  title: string
}

export default function Feature ({children, title}: Props) {
  return (
    <div className='col col--4'>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
