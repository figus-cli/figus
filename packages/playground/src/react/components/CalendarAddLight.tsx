import React, { SVGProps } from "react";

export function CalendarAddLight(props: SVGProps<SVGSVGElement>) {
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
                d="M19.5 9.5v-.8c0-1.1201 0-1.6802-.218-2.108a1.9997 1.9997 0 0 0-.874-.874C17.9802 5.5 17.4201 5.5 16.3 5.5H7.7c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C4.5 7.0198 4.5 7.58 4.5 8.7v.8m15 0v6.8c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874c-.4278.218-.9879.218-2.108.218H7.7c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C4.5 17.9802 4.5 17.4201 4.5 16.3V9.5m15 0h-15"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M8.5 3.5v4m7-4v4M12 17v-5m2.5 2.5h-5"
            />
        </svg>
    );
}
export default CalendarAddLight;
