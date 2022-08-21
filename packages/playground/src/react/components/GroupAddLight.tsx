import React, { SVGProps } from "react";

export function GroupAddLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="8" cy="8" r="2.5" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M11.7679 8.5A2.0003 2.0003 0 0 1 14.5 7.768a2 2 0 1 1-2.7321.732Z"
            />
            <path
                fill="currentColor"
                d="m13.4054 17.507.4938-.0788-.4938.0788ZM12.5 18h-9v1h9v-1Zm-9.4116-.4143c.1298-.814.442-1.9709 1.1756-2.9147C4.9793 13.7507 6.1187 13 8 13v-1c-2.199 0-3.6263.9004-4.5256 2.0573-.881 1.1336-1.2315 2.4801-1.3735 3.3709l.9875.1575ZM8 13c1.8813 0 3.0207.7507 3.7361 1.671.7336.9438 1.0457 2.1007 1.1756 2.9147l.9875-.1575c-.1421-.8908-.4925-2.2373-1.3736-3.3709C11.6263 12.9004 10.199 12 8 12v1Zm-4.5 5c-.2917 0-.443-.2173-.4116-.4143l-.9875-.1575C1.9583 18.322 2.6872 19 3.5 19v-1Zm9 1c.8128 0 1.5417-.678 1.3992-1.5718l-.9875.1575c.0314.197-.1199.4143-.4117.4143v1Z"
            />
            <path
                fill="currentColor"
                d="m17.2966 17.4162-.485.1215.485-.1215Zm-5.4962-3.4354-.268-.4222-.5151.3269.4218.4409.3613-.3456Zm1.605 3.5262.4938-.0788-.4938.0788Zm2.9897.493H12.5v1h3.8951v-1Zm.4165-.4623c.0538.2149-.104.4623-.4165.4623v1c.8707 0 1.6201-.7723 1.3865-1.7052l-.97.2429ZM13.5001 14c1.0277 0 1.7495.5027 2.2783 1.2069.5394.7184.8561 1.6237 1.0332 2.3308l.97-.2429c-.1911-.7633-.5487-1.8161-1.2035-2.6883C15.9126 13.7203 14.9202 13 13.5001 13v1Zm-1.4318.4029c.3898-.2473.8579-.4029 1.4318-.4029v-1c-.7681 0-1.4214.2119-1.9677.5586l.5359.8443Zm-.6292-.0765c.9472.9902 1.3256 2.3382 1.4725 3.2593l.9876-.1575c-.1595-.9997-.5834-2.5866-1.7375-3.7931l-.7226.6913Zm1.4725 3.2593c.0315.197-.1198.4143-.4116.4143v1c.8128 0 1.5417-.678 1.3992-1.5718l-.9876.1575Z"
            />
            <rect
                width="4.5"
                height=".5"
                x="16.25"
                y="5.25"
                stroke="currentColor"
                rx=".25"
            />
            <rect
                width="4.5"
                height=".5"
                x="18.75"
                y="3.25"
                stroke="currentColor"
                rx=".25"
                transform="rotate(90 18.75 3.25)"
            />
        </svg>
    );
}
export default GroupAddLight;
