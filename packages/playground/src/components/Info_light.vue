<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path
            fill="currentColor"
            d="M12.5 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        />
        <path stroke="currentColor" d="M12 17v-7" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoLight",
} as DefineComponent;
</script>
