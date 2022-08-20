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
            d="M15 5h5v10c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19h-1"
        />
        <path
            fill="currentColor"
            d="M4 19h-.5v.5H4V19Zm0 .5h5v-1H4v1Zm5-15H6v1h3v-1ZM3.5 7v12h1V7h-1ZM6 4.5A2.5 2.5 0 0 0 3.5 7h1A1.5 1.5 0 0 1 6 5.5v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrayLight",
} as DefineComponent;
</script>
