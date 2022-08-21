import React, { SVGProps } from "react";

export function CircleRight(props: SVGProps<SVGSVGElement>) {
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
                d="m14 15 .7071-.7071.7071.7071-.7071.7071L14 15Zm-3.2929-4.7071 4 4-1.4142 1.4142-4-4 1.4142-1.4142Zm4 5.4142-4 4-1.4142-1.4142 4-4 1.4142 1.4142Z"
            />
            <path
                stroke="currentColor"
                d="M19.7942 12.75c.9906-.8579 1.3874-1.8552 1.1288-2.8374-.2586-.9821-1.1581-1.8941-2.559-2.5946-1.401-.7004-3.225-1.1502-5.1893-1.2795-1.9642-.1293-3.959.069-5.6747.5644-1.7158.4953-3.0567 1.2598-3.815 2.175-.758.9152-.8911 1.9299-.3783 2.8868.5127.9568 1.6426 1.8023 3.2144 2.4054C8.093 14.6731 10.0189 15 12 15"
                strokeWidth="2"
            />
        </svg>
    );
}
export default CircleRight;
