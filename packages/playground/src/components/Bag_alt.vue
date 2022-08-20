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
            stroke-width="2"
            d="M8 12V8a4 4 0 0 1 8 0v4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M3.694 12.668c.145-1.741.218-2.611.792-3.14C5.06 9 5.934 9 7.681 9h8.639c1.747 0 2.62 0 3.194.528.574.528.647 1.399.792 3.14l.514 6.166c.084 1.013.126 1.52-.17 1.843-.298.323-.806.323-1.824.323H5.174c-1.017 0-1.526 0-1.823-.323-.297-.323-.255-.83-.17-1.843l.513-6.166Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bagAlt",
} as DefineComponent;
</script>
