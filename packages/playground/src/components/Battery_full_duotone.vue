<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="10"
            height="15"
            x="7"
            y="6"
            fill="currentColor"
            fill-opacity=".24"
            rx="1.5"
        />
        <rect width="8" height="13" x="8" y="7" fill="currentColor" rx="1" />
        <rect
            width="6"
            height="2"
            x="9"
            y="3"
            fill="currentColor"
            fill-opacity=".24"
            rx="1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "batteryFullDuotone",
} as DefineComponent;
</script>
