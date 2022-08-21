import React, { SVGProps } from "react";

export function ShopLight(props: SVGProps<SVGSVGElement>) {
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
                d="M14.5 21v-5c0-.5523-.4477-1-1-1h-3c-.5523 0-1 .4477-1 1v5"
                strokeLinejoin="round"
            />
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M5 11v6c0 1.8856 0 2.8284.5858 3.4142C6.1716 21 7.1144 21 9 21h6c1.8856 0 2.8284 0 3.4142-.5858C19 19.8284 19 18.8856 19 17v-6M4.6213 4.515c.1819-.7276.2728-1.0914.544-1.3032C5.4367 3 5.8117 3 6.5617 3h10.8768c.75 0 1.125 0 1.3962.2118.2713.2118.3622.5756.5441 1.3031l1.2036 4.8145c.0969.3873.1453.581.1346.7384a.9999.9999 0 0 1-.69.8837c-.15.0485-.3543.0485-.7628.0485-.5332 0-.7997 0-1.0236-.0522a2 2 0 0 1-1.393-1.18c-.0882-.2122-.1311-.4692-.2167-.9832-.024-.1438-.036-.2157-.0496-.2347a.1.1 0 0 0-.1624 0c-.0136.019-.0256.0909-.0496.2347l-.0815.4892a4.6785 4.6785 0 0 1-.0173.1005 2 2 0 0 1-1.9184 1.6252C14.3289 11 14.3026 11 14.25 11c-.0526 0-.0789 0-.102-.0005a2 2 0 0 1-1.9184-1.6252 4.6785 4.6785 0 0 1-.0173-.1005l-.0815-.4892c-.024-.1438-.036-.2157-.0496-.2347a.1.1 0 0 0-.1624 0c-.0136.019-.0256.0909-.0496.2347l-.0815.4892a4.6785 4.6785 0 0 1-.0173.1005 2 2 0 0 1-1.9184 1.6252C9.8289 11 9.8026 11 9.75 11c-.0526 0-.0789 0-.102-.0005a2 2 0 0 1-1.9184-1.6252c-.0043-.0227-.0086-.0486-.0173-.1005l-.0815-.4892c-.024-.1438-.036-.2157-.0496-.2347a.1.1 0 0 0-.1624 0c-.0136.019-.0256.0909-.0496.2347-.0856.514-.1285.771-.2167.9832a1.9999 1.9999 0 0 1-1.393 1.18C5.5356 11 5.269 11 4.736 11c-.4085 0-.6128 0-.7628-.0485a1 1 0 0 1-.69-.8837c-.0107-.1574.0377-.351.1345-.7384l1.2037-4.8145Z"
            />
        </svg>
    );
}
export default ShopLight;