import React, { SVGProps } from "react";

export function FolderUp(props: SVGProps<SVGSVGElement>) {
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
                d="M16 20h2.4c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C20 19.2401 20 18.9601 20 18.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.2401 8 18.9601 8 18.4 8h-4.7373c-.2445 0-.3668 0-.4819-.0276a1 1 0 0 1-.2891-.1198c-.1009-.0618-.1874-.1483-.3603-.3212l-2.0628-2.0628c-.1729-.173-.2594-.2594-.3603-.3212a1.0004 1.0004 0 0 0-.289-.1198C9.704 5 9.5817 5 9.3372 5H5.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C4 5.76 4 6.04 4 6.6v11.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C4.76 20 5.04 20 5.6 20H8"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="m12 12-3 3m3-3 3 3m-3-3v7"
            />
        </svg>
    );
}
export default FolderUp;
