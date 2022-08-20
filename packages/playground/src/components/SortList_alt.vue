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
            d="M4 8v8h2V8H4Zm1.208-5.688 2.963 4.444A.8.8 0 0 1 7.505 8h-5.01a.8.8 0 0 1-.666-1.244l2.963-4.444a.25.25 0 0 1 .416 0Zm0 19.376 2.963-4.444A.8.8 0 0 0 7.505 16h-5.01a.8.8 0 0 0-.666 1.244l2.963 4.444a.25.25 0 0 0 .416 0Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M11 7h8m-8 5h8m-8 5h8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortListAlt",
} as DefineComponent;
</script>
