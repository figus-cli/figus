<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m15 12 .39-.46c.921-1.082 2.69-.33 2.548 1.084-.148 1.475 1.752 2.195 2.619.991L21 13m-12-.5-.016.085c-.322 1.716-2.77 1.74-3.126.031l-.036-.17C5.535 11.07 3.698 10.78 3 12"
        />
        <circle cx="9.5" cy="6.5" r=".5" stroke="currentColor" />
        <circle cx="16.5" cy="8.5" r=".5" stroke="currentColor" />
        <circle cx="13.5" cy="5.5" r=".5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fat",
} as DefineComponent;
</script>
