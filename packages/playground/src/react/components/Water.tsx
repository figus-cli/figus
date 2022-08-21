import React, { SVGProps } from "react";

export function Water(props: SVGProps<SVGSVGElement>) {
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
                d="M12 18a2 2 0 0 1-1.9319-1.4824"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M10.4243 4.6787c.631-1.0726.9464-1.609 1.398-1.6905a1 1 0 0 1 .3554 0c.4516.0816.767.6179 1.398 1.6905l1.6683 2.8361a27.1865 27.1865 0 0 1 2.7075 6.3153C18.9781 17.4232 16.2801 21 12.5432 21h-1.0864c-3.737 0-6.4349-3.5768-5.4083-7.1699A27.1868 27.1868 0 0 1 8.756 7.5148l1.6683-2.8361Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Water;
