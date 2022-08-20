<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".24" />
        <path stroke="currentColor" d="M12 7v4.75a.25.25 0 0 0 .25.25H15" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeDuotone",
} as DefineComponent;
</script>
