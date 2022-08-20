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
            stroke-opacity=".24"
            d="m8.5 10.5 3.475 1.986a.05.05 0 0 0 .05 0L15.5 10.5"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m4.546 19.403 7.409-15.806a.05.05 0 0 1 .09 0l7.41 15.806a.05.05 0 0 1-.059.07l-7.383-1.97a.051.051 0 0 0-.026 0l-7.383 1.97a.05.05 0 0 1-.058-.07Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "navigateDuotoneLine",
} as DefineComponent;
</script>
