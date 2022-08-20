<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="M16.577 8.526 6.658 5.219c-.3-.1-.45-.15-.554-.075C6 5.219 6 5.377 6 5.694V13l10.577-3.526c.588-.196.882-.294.882-.474s-.294-.278-.882-.474Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M6 13V5.694c0-.317 0-.475.104-.55.104-.075.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474L6 13Zm0 0v6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flagFill",
} as DefineComponent;
</script>
