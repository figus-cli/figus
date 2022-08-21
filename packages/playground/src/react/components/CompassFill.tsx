import React, { SVGProps } from "react";

export function CompassFill(props: SVGProps<SVGSVGElement>) {
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
                d="M12 22c5.5228 0 10-4.4772 10-10 0-5.5229-4.4772-10-10-10C6.4771 2 2 6.4771 2 12c0 5.5228 4.4771 10 10 10Zm2.5981-11.5001c-.574-.9942-3.5752-2.645-4.9315-3.3546a.4783.4783 0 0 0-.704.4064c-.0635 1.5294-.1346 4.954.4394 5.9482.574.9942 3.5753 2.6449 4.9315 3.3546a.4783.4783 0 0 0 .704-.4065c.0635-1.5294.1346-4.9539-.4394-5.9481Z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
        </svg>
    );
}
export default CompassFill;
