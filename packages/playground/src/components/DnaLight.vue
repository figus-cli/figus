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
            stroke-linejoin="round"
            d="m19.5 3.5-.282 2.54A7.262 7.262 0 0 1 12 12.5c-3.7 0-6.81 2.782-7.218 6.46L4.5 21.5"
        />
        <path
            fill="currentColor"
            d="M4.997 3.445a.5.5 0 1 0-.994.11l.994-.11ZM4.782 6.04l.497-.056-.497.056Zm14.436 12.92-.497.055.497-.055Zm-.215 2.595a.5.5 0 1 0 .994-.11l-.994.11ZM12 12a.5.5 0 0 0 0 1v-1Zm-4.489-.43a.5.5 0 1 0 .579-.815l-.58.815ZM4.003 3.555l.282 2.54.994-.11-.282-2.54-.994.11Zm14.718 15.46.282 2.54.994-.11-.282-2.54-.994.11ZM12 13c3.446 0 6.34 2.59 6.72 6.016l.995-.111A7.762 7.762 0 0 0 12 12v1ZM4.285 6.095a7.753 7.753 0 0 0 3.226 5.476l.579-.816a6.753 6.753 0 0 1-2.81-4.77l-.995.11Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M19 6.5H5m14 12H5"
        />
        <path stroke="currentColor" stroke-linejoin="round" d="M18 15.5H6" />
        <path stroke="currentColor" stroke-linejoin="round" d="M17.5 9.5h-11" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "dnaLight",
} as DefineComponent;
</script>
