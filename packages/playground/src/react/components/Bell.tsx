import React, { SVGProps } from "react";

export function Bell(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M6.4478 7.9694C6.7622 5.1404 9.1535 3 12 3s5.2378 2.1403 5.5522 4.9694l.2518 2.2662.0064.0577a8.0004 8.0004 0 0 0 1.0732 3.1792l.0297.0497.5781.9634c.5245.8743.7868 1.3114.7302 1.6703a1.0003 1.0003 0 0 1-.3459.6109C19.5971 17 19.0873 17 18.0678 17H5.9322c-1.0195 0-1.5293 0-1.8079-.2332a.9999.9999 0 0 1-.3459-.6109c-.0566-.3589.2057-.796.7302-1.6703l.578-.9634c.015-.0249.0225-.0373.0298-.0497a8.0005 8.0005 0 0 0 1.0732-3.1792l.0064-.0577.2518-2.2662Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M8 17a3.9998 3.9998 0 0 0 4 4 4.0001 4.0001 0 0 0 4-4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Bell;
