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
            fill-rule="evenodd"
            d="M6 7c0-1.886 0-2.828.586-3.414C7.172 3 8.114 3 10 3h4c1.886 0 2.828 0 3.414.586C18 4.172 18 5.114 18 7v10c0 1.886 0 2.828-.586 3.414C16.828 21 15.886 21 14 21h-4c-1.886 0-2.828 0-3.414-.586C6 19.828 6 18.886 6 17V7Zm3.5-2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "phoneFill",
} as DefineComponent;
</script>
