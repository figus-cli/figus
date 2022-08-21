import React, { SVGProps } from "react";

export function LoadListDuono(props: SVGProps<SVGSVGElement>) {
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
                d="M2 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-1.3605A.1395.1395 0 0 0 20 5.1395V18c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5.1395A.1395.1395 0 0 0 3.8605 5H2.5a.5.5 0 0 1-.5-.5Z"
                fillOpacity=".24"
            />
            <path
                stroke="currentColor"
                d="M12 15.5V10m-2.5 1.5 2.4063-1.925a.15.15 0 0 1 .1874 0L14.5 11.5m-12-7h19"
            />
        </svg>
    );
}
export default LoadListDuono;
