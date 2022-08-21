import React, { SVGProps } from "react";

export function ArrowDownLongLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12.5 17a.5.5 0 0 1-1 0h1Zm-1-14a.5.5 0 0 1 1 0h-1Zm0 14V3h1v14h-1Z"
            />
            <path
                fill="currentColor"
                d="m12.2144 21.6427 2.0586-3.4311c.32-.5332-.0641-1.2116-.686-1.2116h-3.174c-.6219 0-1.006.6784-.686 1.2116l2.0586 3.4311c.0971.1618.3317.1618.4288 0Z"
            />
        </svg>
    );
}
export default ArrowDownLongLight;
