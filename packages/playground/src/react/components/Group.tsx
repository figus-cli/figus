import React, { SVGProps } from "react";

export function Group(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <circle
                cx="12"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                stroke="currentColor"
                d="M15.2679 8A2.0003 2.0003 0 0 1 18 7.268 2 2 0 1 1 15.2679 8ZM5.268 8a2 2 0 1 1 3.464 2 2 2 0 0 1-3.464-2Z"
                strokeWidth="2"
            />
            <path
                fill="currentColor"
                d="m16.8816 18-.9803.1974.1616.8026h.8187v-1Zm3.8386-1.0958.9425-.3343-.9425.3343Zm-5.9394-2.1937-.6048-.7963-1.1566.8785 1.2333.767.5281-.8492ZM19.8672 17h-2.9856v2h2.9856v-2Zm-.0895.2384a.21.21 0 0 1-.0052-.103.2181.2181 0 0 1 .0426-.0971c.0323-.0401.0589-.0383.0521-.0383v2c1.146 0 2.2742-1.0806 1.7955-2.4301l-1.885.6685ZM17 15c1.6416 0 2.4027 1.1811 2.7777 2.2384l1.885-.6685C21.1976 15.2588 19.9485 13 17 13v2Zm-1.6143.5069C15.7702 15.2148 16.282 15 17 15v-2c-1.1619 0-2.0972.3622-2.824.9142l1.2097 1.5927Zm-1.133.0528c1.0391.6463 1.4744 1.7727 1.6486 2.6377l1.9606-.3948c-.2179-1.0822-.8245-2.8662-2.5529-3.9412l-1.0563 1.6983Zm-5.0335-.8492.5281.8492 1.2333-.767-1.1566-.8785-.6048.7963Zm-5.9394 2.1936.9425.3343-.9425-.3343ZM7.1184 18v1h.8186l.1617-.8026L7.1184 18ZM7 15c.718 0 1.2299.2148 1.6143.5069l1.2097-1.5927C9.0972 13.3621 8.162 13 7 13v2Zm-2.7777 2.2384C4.5973 16.1811 5.3584 15 7 15v-2c-2.9485 0-4.1976 2.2587-4.6627 3.5699l1.885.6685ZM4.1328 17c-.0068 0 .0198-.0018.052.0383a.2178.2178 0 0 1 .0427.0971.2093.2093 0 0 1-.0052.103l-1.885-.6685C1.8586 17.9194 2.9868 19 4.1328 19v-2Zm2.9856 0H4.1328v2h2.9856v-2Zm.9803 1.1974c.1742-.865.6094-1.9914 1.6486-2.6377l-1.0562-1.6983c-1.7285 1.0749-2.3351 2.8589-2.553 3.9412l1.9606.3948Z"
            />
            <path
                stroke="currentColor"
                d="M12 14c3.5715 0 4.5919 2.5512 4.8834 4.0089.1083.5415-.3311.9911-.8834.9911H8c-.5523 0-.9917-.4496-.8834-.9911C7.408 16.5512 8.4285 14 12 14Z"
                strokeWidth="2"
            />
        </svg>
    );
}
export default Group;
