<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            d="M5.5 5.9c0-.84 0-1.26.164-1.581a1.5 1.5 0 0 1 .655-.655C6.64 3.5 7.06 3.5 7.9 3.5h4.606c.367 0 .55 0 .723.042.153.036.3.097.433.179.152.093.281.223.54.482l3.595 3.594c.26.26.39.39.482.54.082.135.143.281.18.434.041.173.041.356.041.723V18.1c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.655c-.32.164-.74.164-1.581.164H7.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.655-.655c-.164-.32-.164-.74-.164-1.581V5.9Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M12.5 3.5v3.6c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h3.6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileLight",
} as DefineComponent;
</script>
