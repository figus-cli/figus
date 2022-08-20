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
            stroke-opacity=".24"
            d="M5.5 10v7.5c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293h9c.943 0 1.414 0 1.707-.293.293-.293.293-.764.293-1.707V10"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m20.5 11.5-7.923-5.593a1 1 0 0 0-1.154 0L3.5 11.5"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M14.5 19v-4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v4"
        />
        <path fill="none" stroke="currentColor" d="M17.5 9V5.5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "homeDuotoneLine",
} as DefineComponent;
</script>
