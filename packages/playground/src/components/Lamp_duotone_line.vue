<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            d="M11 13V9.75A1.25 1.25 0 1 0 9.75 11h4.5A1.25 1.25 0 1 0 13 9.75V13"
        />
        <circle
            cx="12"
            cy="9"
            r="6.5"
            stroke="currentColor"
            stroke-opacity=".24"
        />
        <mask id="a" fill="currentColor">
            <path
                fill-rule="evenodd"
                d="M15 15.5c0-.103.056-.2.148-.246a7 7 0 1 0-6.296 0A.274.274 0 0 1 9 15.5v3a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-3Z"
                clip-rule="evenodd"
            />
        </mask>
        <path
            fill="currentColor"
            d="m8.852 15.254-.45.893.45-.893Zm6.296 0-.45-.893.45.893ZM18 9a6 6 0 0 1-3.302 5.361l.9 1.786A8 8 0 0 0 20 9h-2Zm-6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2ZM6 9a6 6 0 0 1 6-6V1a8 8 0 0 0-8 8h2Zm3.302 5.361A6 6 0 0 1 6 9H4a8 8 0 0 0 4.402 7.147l.9-1.786ZM10 18.5v-3H8v3h2Zm1.5 1.5a1.5 1.5 0 0 1-1.5-1.5H8a3.5 3.5 0 0 0 3.5 3.5v-2Zm1 0h-1v2h1v-2Zm1.5-1.5a1.5 1.5 0 0 1-1.5 1.5v2a3.5 3.5 0 0 0 3.5-3.5h-2Zm0-3v3h2v-3h-2Zm-5.598.647A.726.726 0 0 1 8 15.5h2c0-.457-.247-.912-.698-1.139l-.9 1.786Zm6.296-1.786c-.45.227-.698.682-.698 1.139h2a.726.726 0 0 1-.402.647l-.9-1.786Z"
            mask="url(#a)"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lampDuotoneLine",
} as DefineComponent;
</script>
