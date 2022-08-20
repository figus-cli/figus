<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="m5.748 13.748 4.838 4.838c.666.667 1 1 1.414 1 .414 0 .747-.333 1.414-1l4.838-4.838c.85-.85 1.276-1.276 1.406-1.829.13-.553-.06-1.123-.44-2.264l-.306-.92c-.44-1.32-.66-1.98-1.184-2.358C17.204 6 16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378s-.745 1.037-1.185 2.357l-.306.92c-.38 1.14-.57 1.711-.44 2.264.13.553.556.978 1.406 1.83Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "dimondFill",
} as DefineComponent;
</script>
