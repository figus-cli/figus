import React, { SVGProps } from "react";

export function DoneAllAltRound(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                stroke="currentColor"
                d="m2 14 3.233 2.4248a1 1 0 0 0 1.374-.1667L15 6"
            />
            <path
                fill="currentColor"
                d="m9.8744 15.7802 1.7286 1.3828c.8558.6847 2.1033.553 2.7973-.2952L22.774 6.6333c.3497-.4275.2867-1.0575-.1408-1.4072-.4274-.3497-1.0574-.2867-1.4072.1407l-8.3736 10.2345-1.7114-1.3691-1.2666 1.548Z"
            />
        </svg>
    );
}
export default DoneAllAltRound;
