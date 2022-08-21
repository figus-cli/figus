import React, { SVGProps } from "react";

export function StarLight(props: SVGProps<SVGSVGElement>) {
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
                d="M10.1437 6.6276C10.9303 4.6666 11.3236 3.686 12 3.686c.6763 0 1.0696.9805 1.8562 2.9415l.0366.0913c.4444 1.1079.6666 1.6618 1.1195 1.9985.4528.3367 1.0473.39 2.2362.4964l.2149.0192c1.9458.1743 2.9188.2614 3.1269.8804.2082.619-.5143 1.2764-1.9594 2.591l-.4822.4388c-.7315.6655-1.0973.9983-1.2678 1.4344a2.0021 2.0021 0 0 0-.0791.2495c-.1121.4547-.005.9374.2093 1.9029l.0666.3005c.3937 1.7744.5905 2.6615.2469 3.0442a1.0005 1.0005 0 0 1-.4808.2965c-.4962.1354-1.2007-.4386-2.6096-1.5867-.9252-.7539-1.3878-1.1308-1.9189-1.2156a1.9975 1.9975 0 0 0-.6307 0c-.5311.0848-.9937.4617-1.9188 1.2156-1.409 1.1481-2.1135 1.7221-2.6097 1.5867a1 1 0 0 1-.4807-.2965c-.3437-.3827-.1469-1.2698.2468-3.0442l.0667-.3005c.2142-.9655.3213-1.4482.2092-1.9029a2.0023 2.0023 0 0 0-.079-.2495c-.1706-.4361-.5363-.7689-1.2678-1.4344l-.4823-.4388c-1.445-1.3146-2.1676-1.972-1.9594-2.591.2082-.619 1.1811-.706 3.127-.8803l.2149-.0193c1.1889-.1065 1.7833-.1597 2.2362-.4964.4528-.3367.675-.8906 1.1194-1.9985l.0366-.0913Z"
            />
        </svg>
    );
}
export default StarLight;