<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M16 3v3M8 3v3" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M14 4h-4v2a2 2 0 1 1-4 0V4.076c-.975.096-1.631.313-2.121.803C3 5.757 3 7.172 3 10v5c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-5c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.121-.803V6a2 2 0 1 1-4 0V4Zm-7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskFill",
} as DefineComponent;
</script>
