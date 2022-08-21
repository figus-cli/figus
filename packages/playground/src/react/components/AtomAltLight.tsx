import React, { SVGProps } from "react";

export function AtomAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="1.5" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M16.5 12c0 2.7006-.5484 5.1209-1.4117 6.8475C14.2101 20.604 13.0893 21.5 12 21.5c-1.0893 0-2.21-.896-3.0883-2.6525C8.0484 17.1209 7.5 14.7006 7.5 12c0-2.7006.5484-5.1209 1.4117-6.8475C9.7899 3.396 10.9107 2.5 12 2.5c1.0893 0 2.2101.896 3.0883 2.6525C15.9516 6.8791 16.5 9.2994 16.5 12Z"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 16.5c-2.7006 0-5.1209-.5484-6.8475-1.4117C3.396 14.2101 2.5 13.0893 2.5 12c0-1.0893.896-2.21 2.6525-3.0883C6.8791 8.0484 9.2994 7.5 12 7.5c2.7006 0 5.1209.5484 6.8475 1.4117C20.604 9.7899 21.5 10.9107 21.5 12c0 1.0893-.896 2.2101-2.6525 3.0883C17.1209 15.9516 14.7006 16.5 12 16.5Z"
            />
        </svg>
    );
}
export default AtomAltLight;
