import React, { SVGProps } from "react";

export function VideoFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9ZM10.7828 7.9904l5.6437 3.1354c.6858.381.6858 1.3674 0 1.7484l-5.6437 3.1354C9.9829 16.4539 9 15.8756 9 14.9606V9.0394c0-.915.983-1.4933 1.7828-1.049Z"
            />
        </svg>
    );
}
export default VideoFill;
