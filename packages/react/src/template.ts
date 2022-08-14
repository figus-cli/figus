export function template() {
    return `
import React, { SVGProps } from 'react'

export function {{componentName}}(props: SVGProps<SVGSVGElement>) {
  return (
    {{{ paths }}}
  )
}
export default {{componentName}}
    `;
}
