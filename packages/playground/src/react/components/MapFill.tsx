import React, { SVGProps } from "react";

export function MapFill(props: SVGProps<SVGSVGElement>) {
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
                d="M7 5.877c0-.7074-.7145-1.1912-1.3714-.9284l-2 .8A1 1 0 0 0 3 6.677v11.846c0 .7075.7145 1.1912 1.3714.9285l2-.8A1 1 0 0 0 7 17.723V5.877Zm2 11.5923a1 1 0 0 0 .7575.9701l4 1c.6311.1578 1.2425-.3196 1.2425-.9701V6.5308a1 1 0 0 0-.7575-.9701l-4-1C9.6114 4.4029 9 4.8802 9 5.5308v11.9385Zm8.6286-12.1207A1 1 0 0 0 17 6.277v11.846c0 .7075.7145 1.1912 1.3714.9285l2-.8A1.0002 1.0002 0 0 0 21 17.323V5.477c0-.7074-.7145-1.1912-1.3714-.9284l-2 .8Z"
            />
        </svg>
    );
}
export default MapFill;
