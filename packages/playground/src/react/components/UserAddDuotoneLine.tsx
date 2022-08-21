import React, { SVGProps } from "react";

export function UserAddDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="8"
                r="4"
                fill="currentColor"
                stroke="currentColor"
                fillOpacity=".24"
                strokeWidth="1.2"
            />
            <path
                fill="currentColor"
                d="M15.591 16a10.4691 10.4691 0 0 0-1.4022-.3838c-1.4345-.2882-2.9431-.2882-4.3776 0-1.434.2882-2.7557.8569-3.828 1.6612-1.0728.8045-1.867 1.8239-2.2756 2.9678a.6.6 0 0 0 1.13.4038c.3182-.8907.9523-1.7267 1.8655-2.4116.9137-.6852 2.0656-1.1877 3.3446-1.4447.82-.1648 1.6686-.2239 2.5091-.1773A1.994 1.994 0 0 1 14 16h1.591Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M18 14v8m4-4h-8" strokeWidth="1.2" />
        </svg>
    );
}
export default UserAddDuotoneLine;
