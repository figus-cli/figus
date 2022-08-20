<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M14.5 12c0 2.165-.33 4.103-.847 5.481-.259.691-.556 1.216-.86 1.559-.304.343-.573.46-.793.46-.22 0-.49-.117-.794-.46-.303-.343-.6-.868-.86-1.559C9.83 16.103 9.5 14.165 9.5 12s.33-4.103.847-5.481c.259-.691.556-1.216.86-1.559.304-.343.573-.46.793-.46.22 0 .49.117.794.46.303.343.6.868.86 1.559.516 1.378.846 3.316.846 5.481Z"
        />
        <path fill="none" stroke="currentColor" d="M4.5 12h15" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "globeLight",
} as DefineComponent;
</script>
