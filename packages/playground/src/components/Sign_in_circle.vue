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
            d="M4.929 19.071a10 10 0 1 0 0-14.142"
        />
        <path
            fill="currentColor"
            d="m15 12 .78-.625.5.625-.5.625L15 12ZM3 13a1 1 0 1 1 0-2v2Zm8.78-6.625 4 5-1.56 1.25-4-5 1.56-1.25Zm4 6.25-4 5-1.56-1.25 4-5 1.56 1.25ZM15 13H3v-2h12v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInCircle",
} as DefineComponent;
</script>
