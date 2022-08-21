import React, { SVGProps } from "react";

export function UserAddLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="8" r="4" stroke="currentColor" />
            <path
                fill="currentColor"
                d="M15.2759 16c-1.3787-.4387-2.8863-.5927-4.3692-.4462-1.6405.1619-3.192.6859-4.4562 1.5174-1.2644.8316-2.1968 1.9425-2.6488 3.2077a.5.5 0 1 0 .9418.3364C5.1105 19.588 5.8852 18.64 7 17.9067c1.115-.7333 2.508-1.21 4.0049-1.3578a10.1522 10.1522 0 0 1 1.6487-.0279A1.9932 1.9932 0 0 1 14 16h1.2759Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M18 14v8m4-4h-8" />
        </svg>
    );
}
export default UserAddLight;
