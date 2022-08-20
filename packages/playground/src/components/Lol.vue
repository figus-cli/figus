<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <circle
            cx="9"
            cy="10"
            r="1.25"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".5"
        />
        <circle
            cx="15"
            cy="10"
            r="1.25"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".5"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8.629 15c-.28 0-.42 0-.494.107s-.032.225.055.461C8.706 16.978 10.217 18 12 18s3.294-1.021 3.81-2.432c.087-.236.13-.354.055-.461-.074-.107-.214-.107-.494-.107H8.63Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lol",
} as DefineComponent;
</script>
