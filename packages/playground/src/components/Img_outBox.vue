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
            stroke-width="2"
            d="M21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h1"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m19 13.585-.243-.243-.015-.014c-.064-.064-.117-.117-.164-.16a3 3 0 0 0-4.654.754 5.689 5.689 0 0 0-.105.205l-.01.018-.028.057-.002.003-.003-.003-.04-.048L8.758 8.35a1 1 0 0 0-1.518 1.302l4.976 5.805.009.01a2 2 0 0 0 3.301-.289 3.27 3.27 0 0 0 .065-.125l.006-.012a5.55 5.55 0 0 1 .075-.148 1 1 0 0 1 1.551-.252c.012.01.032.03.119.117l1.601 1.601c.046-.718.054-1.61.056-2.773Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M21 3V2h1v1h-1Zm-4.375 4.78a1 1 0 0 1-1.25-1.56l1.25 1.56ZM20 8V3h2v5h-2Zm1-4h-5V2h5v2Zm.625-.22-5 4-1.25-1.56 5-4 1.25 1.56Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgOutBox",
} as DefineComponent;
</script>
