import React, { SVGProps } from "react";

export function User(props: SVGProps<SVGSVGElement>) {
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
                d="M19.7274 20.4471c-.4558-1.2758-1.4602-2.4032-2.8573-3.2072C15.4729 16.4358 13.7611 16 12 16c-1.7611 0-3.473.4358-4.87 1.2399-1.3972.804-2.4016 1.9314-2.8574 3.2072"
            />
            <circle cx="12" cy="8" r="4" stroke="currentColor" />
        </svg>
    );
}
export default User;
