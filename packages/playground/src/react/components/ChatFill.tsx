import React, { SVGProps } from "react";

export function ChatFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9h4.5c1.3978 0 2.0967 0 2.6481-.2284a2.9997 2.9997 0 0 0 1.6235-1.6235C21 18.5967 21 17.8978 21 16.5V12c0-4.9706-4.0294-9-9-9Zm-4 8c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1Zm3 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1Z"
            />
        </svg>
    );
}
export default ChatFill;
