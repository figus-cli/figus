import React, { SVGProps } from "react";

export function BagDuotoneLine(props: SVGProps<SVGSVGElement>) {
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
                d="M5.3472 10.3339c.0725-.8704.1088-1.3057.3958-1.5698S6.4668 8.5 7.3403 8.5h9.3194c.8735 0 1.3102 0 1.5973.2641.287.2641.3233.6994.3958 1.5698l.2244 2.692c.243 2.9163.3645 4.3745-.2464 5.4499a4.0006 4.0006 0 0 1-1.2202 1.3261C16.3896 20.5 14.9264 20.5 12 20.5c-2.9264 0-4.3896 0-5.4106-.6981a4.0001 4.0001 0 0 1-1.2202-1.3261c-.6109-1.0754-.4894-2.5336-.2464-5.4499l.2244-2.692Z"
                strokeOpacity=".24"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M8.5 7v-.5C8.5 4.567 10.067 3 12 3s3.5 1.567 3.5 3.5V7"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M8.5 12.5V11m7 1.5V11"
            />
        </svg>
    );
}
export default BagDuotoneLine;
