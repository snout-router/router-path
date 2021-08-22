import clsx from 'clsx'
import React from 'react'

import styles from './Sandbox.module.css'

const sandboxProp = 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'

export default function Sandbox (props) {
  const {
    codeMirror = true,
    height,
    hideDevTools = true,
    id,
    inline = false,
    previewWindow = 'console',
  } = props

  const src = new URL('https://codesandbox.io/')
  src.pathname = `/embed/${id}`

  if (codeMirror) src.searchParams.append('codemirror', '1')
  if (hideDevTools) src.searchParams.append('hidedevtools', '1')
  if (previewWindow) src.searchParams.append('previewwindow', previewWindow)

  const className = clsx(styles.sandbox, {[styles.inline]: inline})

  return <iframe className={className} style={{height}} sandbox={sandboxProp} src={src.toString()} />
}
