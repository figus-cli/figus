<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="13" r="8" fill="currentColor" fill-opacity=".24" />
        <path stroke="currentColor" stroke-width="1.2" d="M12 13V8" />
        <path
            fill="currentColor"
            d="M20.354 5.354a.5.5 0 0 0-.707-.708l.707.708Zm-1.5 1.5 1.5-1.5-.707-.708-1.5 1.5.707.708Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M10.068 3.37c.114-.106.365-.2.714-.267C11.132 3.036 11.56 3 12 3s.868.036 1.218.103c.349.067.6.161.714.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tumerDuotone",
} as DefineComponent;
</script>
