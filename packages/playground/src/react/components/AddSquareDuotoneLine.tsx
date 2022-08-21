import React, { SVGProps } from "react";

export function AddSquareDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M3.5 11c0-1.8997.001-3.2743.142-4.3225.139-1.0338.4057-1.675.8831-2.1524.4774-.4774 1.1186-.7441 2.1524-.8831C7.7257 3.501 9.1003 3.5 11 3.5h2c1.8998 0 3.2743.001 4.3225.142 1.0338.139 1.675.4057 2.1524.8831.4774.4774.7441 1.1186.8831 2.1524.1409 1.0482.142 2.4228.142 4.3225v2c0 1.8998-.0011 3.2743-.142 4.3225-.139 1.0338-.4057 1.675-.8831 2.1524-.4774.4774-1.1186.7441-2.1524.8831-1.0482.1409-2.4227.142-4.3225.142h-2c-1.8997 0-3.2743-.0011-4.3225-.142-1.0338-.139-1.675-.4057-2.1524-.8831-.4774-.4774-.7441-1.1186-.8831-2.1524C3.501 16.2743 3.5 14.8998 3.5 13v-2Z"
            />
            <path fill="currentColor" stroke="currentColor" d="M12 8v8m4-4H8" />
        </svg>
    );
}
export default AddSquareDuotoneLine;
