import React, { SVGProps } from "react";

export function RainLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 12.5H6v1h6v-1Zm6 0h-6v1h6v-1Zm2.5-2.5c0 1.3807-1.1193 2.5-2.5 2.5v1c1.933 0 3.5-1.567 3.5-3.5h-1ZM18 7.5c1.3807 0 2.5 1.1193 2.5 2.5h1c0-1.933-1.567-3.5-3.5-3.5v1Zm-.9799-1.75C16.1607 3.8354 14.2368 2.5 12 2.5v1c1.8287 0 3.4038 1.0909 4.1078 2.6595l.9123-.4094ZM12 2.5c-2.2368 0-4.1607 1.3353-5.0201 3.25l.9123.4095C8.5962 4.591 10.1713 3.5 12 3.5v-1Zm-6 4c-1.933 0-3.5 1.567-3.5 3.5h1c0-1.3807 1.1193-2.5 2.5-2.5v-1ZM2.5 10c0 1.933 1.567 3.5 3.5 3.5v-1c-1.3807 0-2.5-1.1193-2.5-2.5h-1Zm4.4799-4.25c-.2084.4645-.5952.75-.9799.75v1c.8954 0 1.5765-.637 1.8922-1.3405L6.98 5.7501ZM18 6.5c-.3847 0-.7715-.2855-.9799-.75l-.9123.4095C16.4235 6.863 17.1046 7.5 18 7.5v-1Z"
            />
            <path stroke="currentColor" d="M12 19v-2m5 3v-3M7 21v-4" />
        </svg>
    );
}
export default RainLight;
