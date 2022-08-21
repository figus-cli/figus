import React, { SVGProps } from "react";

export function HorizontalSwitchLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4 8-.3535-.3536L3.2929 8l.3536.3536L4 8Zm15.5 2a.5.5 0 0 0 1 0h-1ZM7.6464 3.6464l-4 4 .7072.7072 4-4-.7072-.7071Zm-4 4.7072 4 4 .7072-.7072-4-4-.7071.7072ZM4 8.5h14v-1H4v1Zm14 0c.8284 0 1.5.6716 1.5 1.5h1c0-1.3807-1.1193-2.5-2.5-2.5v1Zm2 7.5.3536-.3536.3535.3536-.3535.3536L20 16ZM5 16v.5-.5Zm-2.5-2a.5.5 0 0 1 1 0h-1Zm13.8536-2.3536 4 4-.7072.7072-4-4 .7072-.7072Zm4 4.7072-4 4-.7072-.7072 4-4 .7072.7072ZM20 16.5H5v-1h15v1Zm-15 0c-1.3807 0-2.5-1.1193-2.5-2.5h1c0 .8284.6716 1.5 1.5 1.5v1Z"
            />
        </svg>
    );
}
export default HorizontalSwitchLight;
