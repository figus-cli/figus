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
            d="M3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-1"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m18.998 14.29-.595-.594-.01-.01a5.704 5.704 0 0 0-.154-.15 2.5 2.5 0 0 0-3.878.629 5.653 5.653 0 0 0-.098.191l-.007.013a3.135 3.135 0 0 1-.04.08.5.5 0 0 1-.802.098 3.233 3.233 0 0 1-.058-.067L8.38 8.674a.5.5 0 0 0-.76.651l4.976 5.806.008.008a1.5 1.5 0 0 0 2.486-.204l.056-.109.005-.01c.052-.104.07-.141.085-.167a1.5 1.5 0 0 1 2.327-.377l.133.131 1.28 1.28c.013-.41.019-.871.022-1.393Z"
            clip-rule="evenodd"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
        <path
            fill="currentColor"
            d="M8 16v-.5h.5v.5H8Zm-4.688 4.39a.5.5 0 1 1-.624-.78l.624.78ZM7.5 21v-5h1v5h-1Zm.5-4.5H3v-1h5v1Zm.312-.11-5 4-.624-.78 5-4 .624.78Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgLoadBoxLight",
} as DefineComponent;
</script>
