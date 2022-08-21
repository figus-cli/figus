import React, { SVGProps } from "react";

export function PinedDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M8 4.461c0-.4294 0-.644.0648-.8152a1 1 0 0 1 .581-.581C8.8169 3 9.0316 3 9.461 3h5.0779c.4294 0 .6441 0 .8152.0648a1 1 0 0 1 .581.581C16 3.8169 16 4.0316 16 4.461c0 1.1065 0 1.6597.0734 2.1978a7.9996 7.9996 0 0 0 .7316 2.4163c.2374.4884.5443.9487 1.1581 1.8694l1.3986 2.098c.3111.4666.066 1.1005-.478 1.2365a28.382 28.382 0 0 1-13.7674 0c-.544-.136-.789-.7699-.478-1.2365l1.3986-2.098c.6138-.9207.9207-1.381 1.1581-1.8694a7.9999 7.9999 0 0 0 .7316-2.4163C8 6.1209 8 5.5676 8 4.461Z"
            />
            <path stroke="currentColor" d="M12 20v-4" />
            <path stroke="currentColor" d="M6 20h12" />
        </svg>
    );
}
export default PinedDuotone;
