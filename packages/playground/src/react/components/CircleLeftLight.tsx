import React, { SVGProps } from "react";

export function CircleLeftLight(props: SVGProps<SVGSVGElement>) {
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
                d="m10 15-.3536-.3536L9.293 15l.3536.3536L10 15Zm3.6464-4.3536-4 4 .7072.7072 4-4-.7072-.7072Zm-4 4.7072 4 4 .7072-.7072-4-4-.7072.7072Z"
            />
            <path
                stroke="currentColor"
                d="M4.2058 12.75c-1.0155-.8794-1.4063-1.9048-1.1087-2.9093.2976-1.0046 1.266-1.9292 2.7477-2.6238 1.4818-.6945 3.3898-1.118 5.4139-1.2016 2.0241-.0837 4.0452.1775 5.7349.741 1.6897.5634 2.9486 1.396 3.572 2.3625.6234.9665.5746 2.01-.1383 2.9608-.713.9509-2.0482 1.7533-3.7886 2.2767-1.7405.5234-3.7839.737-5.7979.6062"
            />
        </svg>
    );
}
export default CircleLeftLight;
