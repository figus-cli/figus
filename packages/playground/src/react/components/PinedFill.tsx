import React, { SVGProps } from "react";

export function PinedFill(props: SVGProps<SVGSVGElement>) {
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
                d="M8 4.461c0-.4294 0-.644.0648-.8152a1 1 0 0 1 .581-.581C8.8169 3 9.0316 3 9.461 3h5.0779c.4294 0 .6441 0 .8152.0648a1 1 0 0 1 .581.581C16 3.8169 16 4.0316 16 4.461v.2184c0 .89 0 1.3349.0475 1.7689a8.0014 8.0014 0 0 0 .8527 2.8163c.2012.3874.4481.7577.9417 1.4982l1.0378 1.5567c.546.8189.1159 1.9315-.839 2.1702a24.9072 24.9072 0 0 1-12.0814 0c-.9548-.2387-1.385-1.3513-.839-2.1702l1.0378-1.5567c.4936-.7405.7405-1.1108.9417-1.4982a8 8 0 0 0 .8527-2.8163C8 6.0144 8 5.5694 8 4.6794V4.461Z"
            />
            <path stroke="currentColor" d="M12 20v-6.5" />
            <path stroke="currentColor" d="M6 20h12" />
        </svg>
    );
}
export default PinedFill;
