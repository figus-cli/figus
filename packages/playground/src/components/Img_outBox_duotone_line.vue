<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <mask
            id="a"
            width="18"
            height="18"
            x="3"
            y="3"
            maskUnits="userSpaceOnUse"
            style="mask-type: alpha"
        >
            <path
                d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
            />
        </mask>
        <g mask="url(#a)">
            <path
                fill="currentColor"
                fill-opacity=".24"
                stroke="currentColor"
                stroke-width="1.2"
                d="M12.898 14.788 4.366 5.402A1.228 1.228 0 0 0 3.456 5 2.457 2.457 0 0 0 1 7.457V15.5c0 3.771 0 5.657 1.172 6.828C3.343 23.501 5.229 23.501 9 23.501h8.034c.503 0 .755 0 .974-.024a4 4 0 0 0 3.423-2.936c.057-.214.095-.462.172-.96.052-.337.078-.505.09-.665a4 4 0 0 0-1.192-3.149 8.847 8.847 0 0 0-.507-.439l-1.817-1.514a5.491 5.491 0 0 0-.414-.329 2 2 0 0 0-2.783.582c-.06.093-.123.218-.248.468-.07.142-.106.213-.139.262a1 1 0 0 1-1.49.206 2.92 2.92 0 0 1-.205-.215Z"
            />
        </g>
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h1"
        />
        <path
            fill="currentColor"
            d="M21 3v-.6h.6V3H21Zm-4.625 4.468a.6.6 0 1 1-.75-.937l.75.937ZM20.4 8V3h1.2v5h-1.2Zm.6-4.4h-5V2.4h5v1.2Zm.375-.132-5 4-.75-.937 5-4 .75.937Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgOutBoxDuotoneLine",
} as DefineComponent;
</script>
