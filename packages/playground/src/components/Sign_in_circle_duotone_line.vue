<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(0 -1 -1 0 14 12)"
            r="8"
        />
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width=".6"
            d="M5.7 12a8.3 8.3 0 1 1 16.6 0 8.3 8.3 0 0 1-16.6 0Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M4.929 19.071a10 10 0 1 0 0-14.142"
        />
        <path
            fill="currentColor"
            d="m15 12 .469-.375.3.375-.3.375L15 12Zm-12 .6a.6.6 0 1 1 0-1.2v1.2Zm8.469-5.975 4 5-.937.75-4-5 .937-.75Zm4 5.75-4 5-.937-.75 4-5 .937.75ZM15 12.6H3v-1.2h12v1.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInCircleDuotoneLine",
} as DefineComponent;
</script>
