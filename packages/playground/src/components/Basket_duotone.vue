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
            d="M4.413 10.609C3.69 10.127 4.031 9 4.9 9h14.2c.869 0 1.21 1.127.487 1.609a1.756 1.756 0 0 0-.74 1.08l-1.15 5.179c-.335 1.501-.501 2.252-1.05 2.692-.548.44-1.317.44-2.856.44H10.21c-1.539 0-2.308 0-2.856-.44s-.715-1.19-1.05-2.692l-1.15-5.18a1.756 1.756 0 0 0-.74-1.08Z"
        />
        <path
            stroke="currentColor"
            d="M12 7V5m3 11.5.5-3m-3.5 3v-3m-3 3-.5-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketDuotone",
} as DefineComponent;
</script>
