import React, { SVGProps } from "react";

export function Compass(props: SVGProps<SVGSVGElement>) {
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
                d="M9.9425 10.6872c-.0306-.7765-.0249-1.5884-.0082-2.2653.5946.324 1.3006.725 1.9578 1.1397.48.3029.9174.6027 1.2606.8763.37.2951.5361.4869.5794.562.0434.075.1264.3148.197.7828.0654.434.1063.9626.1286 1.5298.0305.7765.0248 1.5885.0081 2.2654-.5945-.324-1.3006-.7251-1.9578-1.1398-.48-.3029-.9174-.6026-1.2605-.8763-.37-.2951-.5361-.4869-.5795-.5619-.0433-.0751-.1264-.3148-.1969-.7828-.0654-.434-.1064-.9627-.1286-1.5299Z"
                strokeWidth="2"
            />
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Compass;
