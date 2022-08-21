import React, { SVGProps } from "react";

export function UserCicrleDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="10" r="3" fill="currentColor" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M17.8719 18.8083c.077-.0615.108-.1647.0733-.257-.3759-.9995-1.1318-1.8807-2.1638-2.5181C14.6966 15.3632 13.3674 15 12 15s-2.6966.3632-3.7814 1.0332c-1.032.6374-1.788 1.5186-2.1638 2.5181-.0347.0923-.0037.1955.0733.257 3.4339 2.7437 8.3099 2.7437 11.7438 0Z"
            />
        </svg>
    );
}
export default UserCicrleDuotoneLine;
