import React, { SVGProps } from "react";

export function MoonFill(props: SVGProps<SVGSVGElement>) {
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
                d="M15 4c.292 0 .438 0 .5781.0418.6139.1834.8994.8893.5856 1.448-.0716.1274-.2893.338-.7248.7592C13.935 7.7035 13 9.7426 13 12c0 2.2574.935 4.2965 2.4389 5.751.4355.4212.6532.6318.7248.7592.3138.5587.0283 1.2646-.5856 1.448C15.438 20 15.292 20 15 20c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8Z"
            />
        </svg>
    );
}
export default MoonFill;
