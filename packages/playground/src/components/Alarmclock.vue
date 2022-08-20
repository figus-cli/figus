<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="13" r="7" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M5 5 3 7m16-2 2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "alarmclock",
} as DefineComponent;
</script>
