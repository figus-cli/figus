import React, { SVGProps } from "react";

export function BellFill(props: SVGProps<SVGSVGElement>) {
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
                d="M6.5025 6.9752C6.7849 4.1508 9.1615 2 12 2c2.8384 0 5.2151 2.1508 5.4975 4.9752l.2866 2.8661c.0175.1743.0262.2615.0366.3472a8 8 0 0 0 1.1906 3.325c.0463.073.0949.1458.1921.2916l.8611 1.2917c.7863 1.1795 1.1795 1.7692 1.007 2.2444a1.0015 1.0015 0 0 1-.1347.2516C20.6371 18 19.9283 18 18.5108 18H5.4892c-1.4175 0-2.1263 0-2.426-.4072a1 1 0 0 1-.1347-.2516c-.1725-.4752.2207-1.0649 1.007-2.2444l.8611-1.2917c.0972-.1458.1458-.2186.1921-.2916a7.9999 7.9999 0 0 0 1.1906-3.325c.0104-.0857.0191-.1729.0366-.3472l.2866-2.8661Z"
            />
            <path
                stroke="currentColor"
                d="M10.0681 20.6294c.114.1063.3651.2003.7144.2673.3493.067.7772.1033 1.2175.1033s.8682-.0363 1.2175-.1033c.3493-.067.6004-.161.7144-.2673"
            />
        </svg>
    );
}
export default BellFill;
