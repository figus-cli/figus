<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            d="M8.209 16.622c.421-.365.999-.646 1.652-.834.658-.19 1.395-.288 2.139-.288s1.48.098 2.139.288c.654.188 1.23.469 1.652.834"
        />
        <circle
            cx="9"
            cy="10"
            r="1"
            fill="currentColor"
            stroke="currentColor"
        />
        <circle
            cx="15"
            cy="10"
            r="1"
            fill="currentColor"
            stroke="currentColor"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sadLight",
} as DefineComponent;
</script>
