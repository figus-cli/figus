import React, { SVGProps } from "react";

export function CheckFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm-.2318-5.3598 5-6-1.5364-1.2804-4.299 5.1588-2.2257-2.2257-1.4142 1.4142 3 3 .7743.7743.701-.8412Z"
            />
        </svg>
    );
}
export default CheckFill;
