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
                d="M12.898 14.788 4.31 5.341A1.041 1.041 0 0 0 3.54 5a2.082 2.082 0 0 1-2.042-2.49L1.897.515A3.75 3.75 0 0 1 5.574-2.5h8.718c3.86 0 5.791 0 6.969 1.208 1.177 1.208 1.128 3.138 1.029 6.997L22 17l-3.823-3.186a5.491 5.491 0 0 0-.414-.329 2 2 0 0 0-2.783.582c-.06.093-.123.218-.248.468-.07.142-.106.213-.139.262a1 1 0 0 1-1.49.206 2.92 2.92 0 0 1-.205-.215Z"
            />
        </g>
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-1"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
        <path
            fill="currentColor"
            d="M8 16v-.6h.6v.6H8Zm-4.625 4.468a.6.6 0 1 1-.75-.937l.75.937ZM7.4 21v-5h1.2v5H7.4Zm.6-4.4H3v-1.2h5v1.2Zm.375-.132-5 4-.75-.936 5-4 .75.937Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgLoadBoxDuotoneLine",
} as DefineComponent;
</script>
