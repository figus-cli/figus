import React, { SVGProps } from "react";

export function UserBoxLight(props: SVGProps<SVGSVGElement>) {
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
                d="M17.9334 21.2571c-.2163-1.1996-.9485-2.2927-2.0602-3.0758-1.1117-.783-2.5272-1.2026-3.9826-1.1805-1.4554.0221-2.8515.4844-3.9282 1.3007-1.0768.8163-1.7607 1.931-1.9244 3.1363"
            />
            <circle cx="12" cy="10" r="3" stroke="currentColor" />
            <rect
                width="19"
                height="19"
                x="2.5"
                y="2.5"
                stroke="currentColor"
                rx="3.5"
            />
        </svg>
    );
}
export default UserBoxLight;
