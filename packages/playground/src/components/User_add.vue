<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13.327 15.076A11.614 11.614 0 0 0 12 15c-1.92 0-3.806.474-5.369 1.373-1.562.9-2.75 2.197-3.3 3.738a1 1 0 0 0 1.883.673c.362-1.012 1.183-1.968 2.415-2.677 1.014-.584 2.235-.957 3.529-1.07a3.005 3.005 0 0 1 2.169-1.961Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2.5" d="M18 14v8m4-4h-8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAdd",
} as DefineComponent;
</script>
