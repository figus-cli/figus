import React, { SVGProps } from "react";

export function MoveLight(props: SVGProps<SVGSVGElement>) {
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
                d="m12 20 .3536.3536-.3536.3535-.3536-.3535L12 20Zm5.3536-4.6464-5 5-.7072-.7072 5-5 .7072.7072Zm-5.7072 5-5-5 .7072-.7072 5 5-.7072.7072ZM12 4l.3536-.3535L12 3.2929l-.3536.3536L12 4Zm5.3536 4.6464-5-5-.7072.7072 5 5 .7072-.7072Zm-5.7072-5-5 5 .7072.7072 5-5-.7072-.7071Z"
            />
        </svg>
    );
}
export default MoveLight;
