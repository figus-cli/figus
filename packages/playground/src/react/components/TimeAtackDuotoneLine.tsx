import React, { SVGProps } from "react";

export function TimeAtackDuotoneLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <mask id="a" fill="currentColor">
                <path d="M12 6.5c0-.2392 0-.3589.0807-.4331.0808-.0743.1934-.0649.4187-.046a6 6 0 1 1-5.4278 9.4012c-.129-.1857-.1934-.2786-.1695-.3856.024-.1071.1276-.1669.3348-.2865l4.5131-2.6057c.122-.0704.183-.1056.2165-.1636.0335-.0581.0335-.1285.0335-.2694V6.5Z" />
            </mask>
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M12 6.5c0-.2392 0-.3589.0807-.4331.0808-.0743.1934-.0649.4187-.046a6 6 0 1 1-5.4278 9.4012c-.129-.1857-.1934-.2786-.1695-.3856.024-.1071.1276-.1669.3348-.2865l4.5131-2.6057c.122-.0704.183-.1056.2165-.1636.0335-.0581.0335-.1285.0335-.2694V6.5Z"
                fillOpacity=".24"
                mask="url(#a)"
                strokeWidth="2.4"
            />
            <circle
                cx="12"
                cy="12"
                r="8.4"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}
export default TimeAtackDuotoneLine;
