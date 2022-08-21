import React, { SVGProps } from "react";

export function CompassLight(props: SVGProps<SVGSVGElement>) {
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
                d="M8.9183 10.9068c-.2586-.9427-.3578-1.8383-.3955-2.3837.5454.0376 1.4411.1366 2.3839.395 1.0137.278 2.0314.7268 2.7397 1.4353.7084.7084 1.1573 1.7261 1.4353 2.7398.2586.9427.3578 1.8382.3955 2.3836-.5455-.0377-1.4412-.1368-2.384-.3953-1.0137-.2781-2.0314-.7269-2.7397-1.4352-.7083-.7083-1.1572-1.7259-1.4352-2.7395Z"
            />
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        </svg>
    );
}
export default CompassLight;
