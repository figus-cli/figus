import React, { SVGProps } from "react";

export function SearchDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M12 19c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7ZM10.0866 7.3806A5 5 0 0 1 12 7a.5.5 0 0 0 0-1 6.0003 6.0003 0 0 0-6 6 .5.5 0 0 0 1 0 5 5 0 0 1 3.0866-4.6194Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M20.5 20.5 17 17" />
            <circle cx="11" cy="11" r="8.5" stroke="currentColor" />
        </svg>
    );
}
export default SearchDuotone;
