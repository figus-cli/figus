import React, { SVGProps } from "react";

export function TemperatureFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 3c-1.6569 0-3 1.3431-3 3v5.5001c0 .3145-.1524.606-.3839.8189C7.6226 13.2328 7 14.5437 7 16c0 2.7614 2.2386 5 5 5s5-2.2386 5-5c0-1.4563-.6226-2.7672-1.6161-3.681-.2315-.2129-.3839-.5044-.3839-.8189V6c0-1.6569-1.3431-3-3-3Zm2 13c0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-.7403.4022-1.3866 1-1.7324V6c0-.5523.4477-1 1-1s1 .4477 1 1v8.2676c.5978.3458 1 .9921 1 1.7324Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default TemperatureFill;
