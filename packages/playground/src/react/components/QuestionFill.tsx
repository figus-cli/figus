import React, { SVGProps } from "react";

export function QuestionFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-8 6c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1ZM12 5C9.7909 5 8 6.7909 8 9h2c0-1.1046.8954-2 2-2h.0943C13.1468 7 14 7.8532 14 8.9057v.5132c0 .5138-.3288.9699-.8162 1.1324A3.1937 3.1937 0 0 0 11 13.5811V16h2v-2.4189c0-.5138.3288-.9699.8162-1.1324A3.1937 3.1937 0 0 0 16 9.4189v-.5132C16 6.7487 14.2514 5 12.0943 5H12Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default QuestionFill;
