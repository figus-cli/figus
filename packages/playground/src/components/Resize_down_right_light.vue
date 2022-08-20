<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M10 20h10V10" />
        <path fill="none" stroke="currentColor" d="M12 17h5v-5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "resizeDownRightLight",
} as DefineComponent;
</script>
