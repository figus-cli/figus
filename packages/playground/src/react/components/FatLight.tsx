import React, { SVGProps } from "react";

export function FatLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m15 12 .6263-.7368c.8487-.9985 2.4779-.3056 2.3476.9983-.1409 1.4089 1.7189 2.0404 2.465.837L20.5 13M9 12l-.1775 1.0056c-.2801 1.5876-2.5458 1.6224-2.8746.0442l-.1713-.822C5.5374 11.0795 3.962 10.9219 3.5 12"
            />
            <circle cx="9.5" cy="6.5" r=".5" stroke="currentColor" />
            <circle cx="16.5" cy="8.5" r=".5" stroke="currentColor" />
            <circle cx="13.5" cy="5.5" r=".5" stroke="currentColor" />
        </svg>
    );
}
export default FatLight;
