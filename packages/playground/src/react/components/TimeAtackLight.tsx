import React, { SVGProps } from "react";

export function TimeAtackLight(props: SVGProps<SVGSVGElement>) {
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
                d="M12 6.72c0-.2484 0-.3726.0567-.4745.0461-.0831.1354-.1622.2234-.1981.108-.044.218-.0308.4382-.0042A5.9997 5.9997 0 0 1 18 12a6 6 0 0 1-10.7996 3.6005c-.1331-.1774-.1996-.2661-.2155-.3816-.013-.0942.011-.2111.0598-.2926.06-.1.1676-.1621.3827-.2863l4.2126-2.4322c.1311-.0757.1967-.1135.2444-.1665a.451.451 0 0 0 .0936-.162c.022-.0678.022-.1436.022-.295V6.72Z"
            />
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        </svg>
    );
}
export default TimeAtackLight;
