import React, { SVGProps } from "react";

export function Out(props: SVGProps<SVGSVGElement>) {
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
                d="M3 3V2H2v1h1Zm9.2929 10.7071c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-1.4142 1.4142ZM4 11V3H2v8h2ZM3 4h8V2H3v2Zm-.7071-.2929 10 10 1.4142-1.4142-10-10L2.293 3.707Z"
            />
            <path
                stroke="currentColor"
                d="M4 15c0 1.8692 0 2.8038.402 3.5.2632.4561.642.8348 1.098 1.0981C6.1962 20 7.1308 20 9 20h5c2.8284 0 4.2426 0 5.1213-.8787C20 18.2426 20 16.8284 20 14V9c0-1.8692 0-2.8038-.4019-3.5A2.9997 2.9997 0 0 0 18.5 4.402C17.8038 4 16.8692 4 15 4"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Out;
