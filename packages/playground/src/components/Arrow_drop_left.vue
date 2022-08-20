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
            d="m7.293 11.795 8.448-5.914A.8.8 0 0 1 17 6.536v10.927a.8.8 0 0 1-1.259.656l-8.448-5.914a.25.25 0 0 1 0-.41Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDropLeft",
} as DefineComponent;
</script>
