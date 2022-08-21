import React, { SVGProps } from "react";

export function UserScanDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="9" r="3" fill="currentColor" />
            <path
                fill="currentColor"
                d="M17.4514 15.9084a.2366.2366 0 0 1-.0671.3041C15.8828 17.3352 14.0191 18 12.0001 18c-2.019 0-3.8828-.6649-5.3843-1.7876a.2366.2366 0 0 1-.0671-.3041C7.4988 14.1915 9.5824 13 12 13c2.4176 0 4.5012 1.1915 5.4514 2.9084Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path
                stroke="currentColor"
                d="M17.5 3.5h.2c1.7913 0 2.687 0 3.2435.5565C21.5 4.613 21.5 5.5087 21.5 7.3v.2m-4 13h.2c1.7913 0 2.687 0 3.2435-.5565.5565-.5565.5565-1.4522.5565-3.2435v-.2m-15-13h-.2c-1.7913 0-2.687 0-3.2435.5565C2.5 4.613 2.5 5.5087 2.5 7.3v.2m4 13h-.2c-1.7913 0-2.687 0-3.2435-.5565C2.5 19.387 2.5 18.4913 2.5 16.7v-.2"
            />
        </svg>
    );
}
export default UserScanDuotone;
