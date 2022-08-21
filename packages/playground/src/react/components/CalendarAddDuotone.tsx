import React, { SVGProps } from "react";

export function CalendarAddDuotone(props: SVGProps<SVGSVGElement>) {
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
                d="M7 4.4325c0-.1557 0-.2335-.0509-.2783-.051-.0448-.1267-.035-.2782-.0156-1.1212.1437-1.9028.4365-2.4993 1.033C3 6.343 3 8.2288 3 12c0 3.7712 0 5.6569 1.1716 6.8284C5.343 20 7.2288 20 11 20h2c3.7712 0 5.6569 0 6.8284-1.1716C21 17.6569 21 15.7712 21 12c0-3.7712 0-5.6569-1.1716-6.8284-.5965-.5965-1.378-.8893-2.4993-1.033-.1515-.0194-.2273-.0292-.2782.0156S17 4.2768 17 4.4324V6.5c0 .8284-.6716 1.5-1.5 1.5S14 7.3284 14 6.5V4.3c0-.141 0-.2116-.0439-.2555-.0438-.044-.1143-.044-.2552-.0442C13.4748 4 13.2412 4 13 4h-2c-.2412 0-.4748 0-.7009.0003-.1409.0002-.2114.0003-.2552.0442C10 4.0885 10 4.159 10 4.3v2.2C10 7.3284 9.3284 8 8.5 8S7 7.3284 7 6.5V4.4325Z"
                clipRule="evenodd"
                fillOpacity=".24"
                fillRule="evenodd"
            />
            <path stroke="currentColor" d="M8.5 2.5v4m7-4v4" />
            <path stroke="currentColor" d="M12 16v-6m3 3H9" strokeWidth="1.2" />
        </svg>
    );
}
export default CalendarAddDuotone;
