import React, { SVGProps } from "react";

export function CircleRightLight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 15 .3536-.3536.3535.3536-.3535.3536L14 15Zm-3.6464-4.3536 4 4-.7072.7072-4-4 .7072-.7072Zm4 4.7072-4 4-.7072-.7072 4-4 .7072.7072Z"
            />
            <path
                stroke="currentColor"
                d="M19.7942 12.75c1.0166-.8803 1.407-1.9069 1.1078-2.9123-.2993-1.0055-1.2705-1.9307-2.7557-2.6249-1.4851-.6942-3.3966-1.1166-5.4231-1.1982-2.0265-.0817-4.0487.182-5.737.7484-1.6884.5663-2.9436 1.4017-3.561 2.3703-.6175.9685-.561 2.013.1604 2.9634.7214.9504 2.065 1.7507 3.8122 2.2705 1.7472.5198 3.7949.7285 5.8096.5921"
            />
        </svg>
    );
}
export default CircleRightLight;
