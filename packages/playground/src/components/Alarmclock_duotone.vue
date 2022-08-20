<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="13" r="8" fill="currentColor" fill-opacity=".24" />
        <path
            stroke="currentColor"
            d="m5.5 4.5-2 2m15-2 2 2M12 8v4.924c0 .05.015.098.042.139L14 16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "alarmclockDuotone",
} as DefineComponent;
</script>
