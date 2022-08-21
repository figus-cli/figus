import React, { SVGProps } from "react";

export function Database(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <ellipse cx="12" cy="6" stroke="currentColor" rx="7" ry="3" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M19 18c0 .394-.1811.7841-.5328 1.1481-.3518.3639-.8674.6946-1.5175.9732-.65.2786-1.4216.4996-2.2709.6503C13.8295 20.9224 12.9193 21 12 21c-.9193 0-1.8295-.0776-2.6788-.2284-.8493-.1507-1.621-.3717-2.271-.6503-.65-.2786-1.1656-.6093-1.5174-.9732C5.1811 18.7841 5 18.394 5 18M19 6v12M5 6v12"
            />
        </svg>
    );
}
export default Database;
