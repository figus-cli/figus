import React, { SVGProps } from "react";

export function UserCircle(props: SVGProps<SVGSVGElement>) {
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
                d="M2 12C2 6.4771 6.4771 2 12 2c5.5228 0 10 4.4771 10 10 0 3.0141-1.3335 5.7167-3.4427 7.5501a7.0003 7.0003 0 0 0-10.8186-3.1036 7.0007 7.0007 0 0 0-2.296 3.1036C3.3335 17.7167 2 15.0141 2 12Zm14.8296 8.7059a.9474.9474 0 0 0 .0133.0453C15.4081 21.5469 13.757 22 12 22c-1.757 0-3.408-.4531-4.8429-1.2488a.9474.9474 0 0 0 .0133-.0453 5.0002 5.0002 0 0 1 7.8734-2.6727 4.9998 4.9998 0 0 1 1.7858 2.6727ZM10 9c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2Zm2-4C9.7909 5 8 6.7909 8 9c0 2.2091 1.7909 4 4 4 2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4Z"
            />
            <rect
                width="19"
                height="19"
                x="2.5"
                y="2.5"
                stroke="currentColor"
                rx="9.5"
            />
        </svg>
    );
}
export default UserCircle;
