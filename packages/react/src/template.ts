export function template() {
    return `
import React, { SVGProps } from 'react'

export function {{componentName}}(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      {{{ paths }}}
    </svg>
  )
}
export default {{componentName}}
    `;
}
