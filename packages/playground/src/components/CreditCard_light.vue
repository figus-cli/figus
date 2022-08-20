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
            d="M3.5 9.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .767-.767c.39-.203.903-.203 1.928-.203h11.204c1.025 0 1.538 0 1.928.203a1.8 1.8 0 0 1 .767.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.767.767c-.39.203-.903.203-1.928.203H6.398c-1.025 0-1.538 0-1.928-.203a1.8 1.8 0 0 1-.767-.767c-.203-.39-.203-.903-.203-1.928V9.398Z"
        />
        <path stroke="currentColor" d="M3.5 10.5h17" />
        <circle cx="6.5" cy="15.5" r=".5" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "creditCardLight",
} as DefineComponent;
</script>
