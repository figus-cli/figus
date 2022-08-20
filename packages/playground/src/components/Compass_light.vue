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
            d="M8.918 10.907a12.534 12.534 0 0 1-.395-2.384c.545.038 1.44.137 2.384.395 1.013.278 2.031.727 2.74 1.435.708.709 1.157 1.726 1.435 2.74.258.943.357 1.838.395 2.384a12.541 12.541 0 0 1-2.384-.396c-1.014-.278-2.031-.726-2.74-1.435-.708-.708-1.157-1.726-1.435-2.74Z"
        />
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassLight",
} as DefineComponent;
</script>
