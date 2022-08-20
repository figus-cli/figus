<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            d="M18.5 9.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.98 5.5 16.42 5.5 15.3 5.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 7.02 4.5 7.58 4.5 8.7v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h5.8"
        />
        <path fill="none" stroke="currentColor" d="M7.5 12.5h4m-4-4h7" />
        <circle cx="17.5" cy="13.5" r="2" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M19.5 18.5s-.5-1-2-1-2 1-2 1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sertificateLightLight",
} as DefineComponent;
</script>
