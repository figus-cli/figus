import React, { SVGProps } from "react";

export function CancelFill(props: SVGProps<SVGSVGElement>) {
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
                d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-4.8284 2.7574C16.6951 13.967 17 13.0191 17 12c0-2.7614-2.2386-5-5-5-1.0191 0-1.967.3049-2.7574.8284l6.929 6.929ZM7.8284 9.2426l6.929 6.929C13.967 16.6951 13.0191 17 12 17c-2.7614 0-5-2.2386-5-5 0-1.0191.3049-1.967.8284-2.7574ZM12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7Z"
            />
        </svg>
    );
}
export default CancelFill;
