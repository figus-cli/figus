import React, { SVGProps } from "react";

export function FavoriteLight(props: SVGProps<SVGSVGElement>) {
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
                d="m4.4507 13.9082 6.9526 6.5313c.2395.2249.3592.3374.5004.3651a.4993.4993 0 0 0 .1926 0c.1412-.0277.2609-.1402.5004-.3651l6.9526-6.5313c1.9562-1.8376 2.1937-4.8616.5485-6.9821l-.3093-.3988c-1.9682-2.5367-5.9189-2.1113-7.3018.7863-.1954.4094-.778.4094-.9734 0-1.3829-2.8976-5.3336-3.323-7.3018-.7862l-.3093.3987c-1.6453 2.1205-1.4077 5.1445.5485 6.9821Z"
            />
        </svg>
    );
}
export default FavoriteLight;
