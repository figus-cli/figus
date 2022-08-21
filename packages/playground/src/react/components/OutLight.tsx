import React, { SVGProps } from "react";

export function OutLight(props: SVGProps<SVGSVGElement>) {
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
                d="M3 3v-.5h-.5V3H3Zm9.6464 10.3536a.5002.5002 0 0 0 .7072 0 .5002.5002 0 0 0 0-.7072l-.7072.7072ZM3.5 11V3h-1v8h1ZM3 3.5h8v-1H3v1Zm-.3535-.1465 9.9999 10.0001.7072-.7072-10-10-.7071.7071Z"
            />
            <path
                stroke="currentColor"
                d="M4 15c0 1.8692 0 2.8038.402 3.5.2632.4561.642.8348 1.098 1.0981C6.1962 20 7.1308 20 9 20h5c2.8284 0 4.2426 0 5.1213-.8787C20 18.2426 20 16.8284 20 14V9c0-1.8692 0-2.8038-.4019-3.5A2.9997 2.9997 0 0 0 18.5 4.402C17.8038 4 16.8692 4 15 4"
            />
        </svg>
    );
}
export default OutLight;
