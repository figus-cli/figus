<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="2" height="2" x="13" y="14" fill="currentColor" rx="1" />
        <path stroke="currentColor" d="M10 14H6m2-2v4" />
        <rect width="2" height="2" x="16" y="12" fill="currentColor" rx="1" />
        <path
            stroke="currentColor"
            d="M14 8c0-.417 0-.625-.035-.809a2 2 0 0 0-1.13-1.446c-.169-.078-.371-.129-.775-.23L12 5.5c-.461-.115-.692-.173-.883-.267a2 2 0 0 1-1.072-1.373C10 3.652 10 3.414 10 2.939V2"
        />
        <path
            stroke="currentColor"
            d="M3 14c0-2.559 0-3.838.62-4.72a3.147 3.147 0 0 1 .554-.604C4.982 8 6.154 8 8.5 8h7c2.346 0 3.518 0 4.326.676.208.174.394.377.554.604.62.882.62 2.161.62 4.72 0 2.559 0 3.838-.62 4.72a3.15 3.15 0 0 1-.554.604C19.018 20 17.846 20 15.5 20h-7c-2.346 0-3.518 0-4.326-.676a3.15 3.15 0 0 1-.554-.604C3 17.838 3 16.559 3 14Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "gamepadLight",
} as DefineComponent;
</script>
