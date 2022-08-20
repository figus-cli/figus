<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".24" />
        <path fill="currentColor" d="M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        <path
            stroke="currentColor"
            d="M12 16.5v-5c0-.465 0-.698-.051-.888a1.5 1.5 0 0 0-1.06-1.06C10.697 9.5 10.464 9.5 10 9.5m2 7h1.5m-1.5 0h-1.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoDuotone",
} as DefineComponent;
</script>
