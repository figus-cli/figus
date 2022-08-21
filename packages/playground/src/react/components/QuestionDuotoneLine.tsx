import React, { SVGProps } from "react";

export function QuestionDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="currentColor"
                stroke="currentColor"
            />
            <circle
                cx="12"
                cy="18"
                r=".6"
                fill="currentColor"
                stroke="currentColor"
            />
            <path
                stroke="currentColor"
                d="M12 16v-.8568c0-.7142.357-1.3812.9512-1.7773l.5985-.399A3.257 3.257 0 0 0 15 10.2569V10c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3"
            />
        </svg>
    );
}
export default QuestionDuotoneLine;
