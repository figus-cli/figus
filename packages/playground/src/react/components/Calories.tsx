import React, { SVGProps } from "react";

export function Calories(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5 10.0003c0-.7915 1.0528-1.0013 1.3321-.2607C16.5077 11.531 17 13.1337 17 14.0002c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5c0-.9309.5682-2.7115 1.3216-4.6632.9758-2.5282 1.4638-3.7923 2.0661-3.8604.1927-.0218.403.0174.5749.1071.5374.2804.5374 1.6591.5374 4.4166 0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m11 19-.2628-.657a3.4065 3.4065 0 0 1 .5028-3.393c.3896-.487 1.1304-.487 1.52 0a3.4065 3.4065 0 0 1 .5028 3.393L13 19"
            />
        </svg>
    );
}
export default Calories;
