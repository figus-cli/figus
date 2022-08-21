import React, { SVGProps } from "react";

export function DimondFill(props: SVGProps<SVGSVGElement>) {
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
                d="m5.748 13.7481 4.8378 4.8377c.6667.6667 1 1 1.4142 1 .4142 0 .7475-.3333 1.4142-1l4.8377-4.8377c.8506-.8506 1.2758-1.2758 1.4064-1.8288.1305-.5529-.0597-1.1235-.4401-2.2646l-.3065-.9196c-.44-1.32-.66-1.98-1.1838-2.3576C17.2041 6 16.5084 6 15.117 6H8.883c-1.3914 0-2.0871 0-2.6109.3775S5.5283 7.415 5.0883 8.7351l-.3065.9196c-.3804 1.1411-.5706 1.7117-.44 2.2646.1305.553.5557.9782 1.4063 1.8288Z"
            />
        </svg>
    );
}
export default DimondFill;
