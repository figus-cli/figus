import React, { SVGProps } from "react";

export function TumerDuotone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="13" r="8" fill="currentColor" />
            <path stroke="currentColor" d="M12 13V8" />
            <path
                fill="currentColor"
                d="M20.3536 5.3536a.5001.5001 0 0 0-.7071-.7072l.7071.7072Zm-1.5 1.5 1.5-1.5-.7071-.7072-1.5001 1.5.7072.7072Z"
            />
            <path
                stroke="currentColor"
                d="M10.0681 3.3706c.114-.1063.3651-.2003.7144-.2673C11.1318 3.0363 11.5597 3 12 3s.8682.0363 1.2175.1033c.3493.067.6004.161.7144.2673"
            />
        </svg>
    );
}
export default TumerDuotone;
