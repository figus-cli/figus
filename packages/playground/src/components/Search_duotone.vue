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
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM10.087 7.38A5 5 0 0 1 12 7a.5.5 0 0 0 0-1 6 6 0 0 0-6 6 .5.5 0 0 0 1 0 5 5 0 0 1 3.087-4.62Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M20.5 20.5 17 17" />
        <circle cx="11" cy="11" r="8.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchDuotone",
} as DefineComponent;
</script>
