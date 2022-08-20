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
            d="m4.546 19.403 7.409-15.806a.05.05 0 0 1 .09 0l7.41 15.806a.05.05 0 0 1-.059.07l-7.383-1.97a.051.051 0 0 0-.026 0l-7.383 1.97a.05.05 0 0 1-.058-.07Z"
        />
        <path
            fill="currentColor"
            d="m11.975 12.486.248-.434-.248.434Zm.05 0-.248-.434.248.434Zm-3.773-1.552 3.475 1.986.496-.868-3.475-1.986-.496.868Zm4.02 1.986 3.476-1.986-.496-.868-3.475 1.986.496.868Zm-.545 0a.55.55 0 0 0 .546 0l-.496-.868a.45.45 0 0 1 .446 0l-.496.868Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "navigateLight",
} as DefineComponent;
</script>
