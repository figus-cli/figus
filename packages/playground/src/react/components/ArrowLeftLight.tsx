import React, { SVGProps } from "react";

export function ArrowLeftLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4 12-.3535-.3536L3.2929 12l.3536.3536L4 12Zm15 .5a.5.5 0 0 0 0-1v1ZM9.6464 5.6464l-6 6 .7072.7072 6-6-.7072-.7072Zm-6 6.7072 6 6 .7072-.7072-6-6-.7071.7072ZM4 12.5h15v-1H4v1Z"
            />
        </svg>
    );
}
export default ArrowLeftLight;
