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
            stroke-width="2"
            d="M4 7.414c0-.204 0-.306.038-.398.038-.092.11-.164.255-.309l1.535-1.535c.578-.578.867-.867 1.235-1.02C7.431 4 7.84 4 8.657 4h6.686c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02l1.535 1.535c.145.145.217.217.255.309.038.092.038.194.038.398V8H4v-.586Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M21 8H3v9c0 1.886 0 2.828.586 3.414C4.172 21 5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586C21 19.828 21 18.886 21 17V8Zm-11 3a1 1 0 1 0-2 0 4 4 0 0 0 4 4 4 4 0 0 0 2.828-1.172A4 4 0 0 0 16 11a1 1 0 1 0-2 0 2 2 0 0 1-4 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxAltFill",
} as DefineComponent;
</script>
