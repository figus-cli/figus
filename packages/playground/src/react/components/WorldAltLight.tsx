import React, { SVGProps } from "react";

export function WorldAltLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="12" r="8" stroke="currentColor" />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M18.572 7.2064c-.7237.8471-1.6851 1.5422-2.8048 2.0278-1.1197.4856-2.3655.7478-3.6346.765-1.269.017-2.5248-.2115-3.6637-.6666-1.1389-.4552-2.1281-1.124-2.886-1.9512m12.9891 9.4122c-.7237-.8471-1.6851-1.5422-2.8048-2.0278-1.1197-.4856-2.3655-.7478-3.6346-.7649-1.269-.0171-2.5248.2114-3.6637.6665-1.1389.4552-2.1281 1.124-2.886 1.9512M12 4v16"
            />
        </svg>
    );
}
export default WorldAltLight;
