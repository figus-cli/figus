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
            d="M18.5 7c0 1.5-3 2.5-6.5 2.5S5.5 8.5 5.5 7s3-2.5 6.5-2.5 6.5 1 6.5 2.5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m5.5 7 1.813 10.425a1.826 1.826 0 0 0 1.222 1.42 10.958 10.958 0 0 0 6.93 0 1.826 1.826 0 0 0 1.222-1.42L18.5 7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "delAltLight",
} as DefineComponent;
</script>
