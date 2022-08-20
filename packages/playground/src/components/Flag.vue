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
            stroke-width="2"
            d="M6 13V5.694c0-.317 0-.475.104-.55.104-.075.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474L6 13Zm0 0v6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flag",
} as DefineComponent;
</script>
