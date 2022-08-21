import React, { SVGProps } from "react";

export function Widget(props: SVGProps<SVGSVGElement>) {
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
                d="M2 12c0-1.8692 0-2.8039.402-3.5A3 3 0 0 1 3.5 7.402C4.1962 7 5.1308 7 7 7h10c1.8692 0 2.8038 0 3.5.402.4561.2632.8348.642 1.0981 1.098C22 9.1961 22 10.1308 22 12s0 2.8038-.4019 3.5A2.9994 2.9994 0 0 1 20.5 16.5981C19.8038 17 18.8692 17 17 17H7c-1.8692 0-2.8038 0-3.5-.4019A2.9997 2.9997 0 0 1 2.402 15.5C2 14.8038 2 13.8692 2 12Zm17-8c0-1.1046-.8954-2-2-2H7c-1.1046 0-2 .8954-2 2m14 16c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2"
            />
            <rect
                width="5"
                height="1"
                x="5.5"
                y="10.5"
                stroke="currentColor"
                rx=".5"
            />
        </svg>
    );
}
export default Widget;
