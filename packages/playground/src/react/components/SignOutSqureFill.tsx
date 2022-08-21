import React, { SVGProps } from "react";

export function SignOutSqureFill(props: SVGProps<SVGSVGElement>) {
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
                d="m8.379 2.6686 3.6896-.5798c3.2206-.506 4.8309-.7591 5.8811.139C19 3.1259 19 4.756 19 8.016v2.9835h-5.9194l2.7003-3.3753-1.5618-1.2494-4 5-.4997.6247.4997.6247 4 5 1.5618-1.2494-2.7003-3.3753H19v2.9835c0 3.2601 0 4.8902-1.0503 5.7883-1.0502.8981-2.6605.6451-5.8811.139l-3.6896-.5798c-1.6127-.2535-2.419-.3802-2.899-.9415C5 19.8278 5 19.0115 5 17.379V6.6201c0-1.6325 0-2.4488.48-3.01.48-.5614 1.2863-.688 2.899-.9415Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default SignOutSqureFill;
