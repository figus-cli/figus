import React, { SVGProps } from "react";

export function RingFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6.9011 11.8461C7.5516 9.5695 9.6324 8 12 8c2.3677 0 4.4484 1.5695 5.0989 3.8461l.5582 1.9537a7.9957 7.9957 0 0 0 1.0353 2.2388l.1088.1632c.1396.2093.2093.314.2438.3914.2655.5962-.102 1.2827-.7453 1.3925-.0835.0143-.2093.0143-.4609.0143H6.1612c-.2516 0-.3774 0-.461-.0143-.6432-.1098-1.0107-.7963-.7452-1.3925.0345-.0774.1042-.1821.2438-.3914l.1088-.1632a7.9959 7.9959 0 0 0 1.0353-2.2388l.5582-1.9537Z"
            />
            <path stroke="currentColor" d="m11 9 1-6m1 6-1-6m.5 18h-1" />
        </svg>
    );
}
export default RingFill;
