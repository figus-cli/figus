import React, { SVGProps } from "react";

export function GroupLight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle cx="12" cy="8" r="2.5" stroke="currentColor" />
            <path
                stroke="currentColor"
                d="M13.7679 6.5a2.0006 2.0006 0 0 1 1.9932-.9829 2.0002 2.0002 0 0 1 .9564 3.5696A2 2 0 0 1 14.5 9.232M10.2321 6.5a2.0003 2.0003 0 0 0-3.0508-.5037A2 2 0 0 0 9.5 9.232"
            />
            <path
                stroke="currentColor"
                d="M12 12.5c4.0802 0 5.1335 3.3022 5.4054 5.007.087.5454-.3531.993-.9054.993h-9c-.5523 0-.9924-.4476-.9054-.993C6.8665 15.8022 7.9198 12.5 12 12.5Z"
            />
            <path
                fill="currentColor"
                d="m19.2965 15.4162-.485.1215.485-.1215Zm-6.2094-2.8303-.3692-.3371-.6205.6795.9077.1508.082-.4932ZM17.1813 16.5l-.4803.139.1045.361h.3758v-.5ZM15.5 12c1.0277 0 1.7495.5027 2.2783 1.2069.5394.7184.8561 1.6237 1.0332 2.3308l.9701-.2429c-.1912-.7633-.5487-1.8161-1.2036-2.6883C17.9126 11.7203 16.9202 11 15.5 11v1Zm-2.0437.923C13.9567 12.375 14.6107 12 15.5 12v-1c-1.2172 0-2.1264.5306-2.7821 1.2488l.7384.6742Zm-.4512.1561c2.3005.3823 3.2739 2.101 3.6959 3.5599l.9606-.278c-.4711-1.6284-1.6426-3.7947-4.4925-4.2683l-.164.9864ZM18.395 16h-1.2137v1h1.2137v-1Zm.4165-.4623c.0538.2149-.104.4623-.4165.4623v1c.8707 0 1.6202-.7723 1.3866-1.7052l-.9701.2429Zm-7.8986-2.9518.082.4932.9077-.1508-.6205-.6795-.3692.3371Zm-6.2095 2.8303.485.1215-.485-.1215ZM6.8187 16.5v.5h.3758l.1045-.361-.4803-.139ZM8.5 12c.8893 0 1.5433.375 2.0436.923l.7385-.6742C10.6264 11.5306 9.7172 11 8.5 11v1Zm-3.3116 3.5377c.1771-.7071.4939-1.6124 1.0333-2.3308C6.7505 12.5027 7.4723 12 8.5 12v-1c-1.4202 0-2.4126.7203-3.078 1.6065-.6549.8722-1.0124 1.925-1.2036 2.6883l.97.2429ZM5.605 16c-.3125 0-.4704-.2474-.4166-.4623l-.97-.2429C3.9848 16.2277 4.7342 17 5.605 17v-1Zm1.2137 0H5.605v1h1.2137v-1Zm.4803.639c.422-1.4589 1.3953-3.1776 3.6959-3.5599l-.164-.9864c-2.8499.4736-4.0214 2.6399-4.4925 4.2683l.9606.278Z"
            />
        </svg>
    );
}
export default GroupLight;
