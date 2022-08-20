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
            d="M6.503 6.975a5.525 5.525 0 0 1 10.994 0l.287 2.866c.018.175.026.262.037.348a8 8 0 0 0 1.19 3.325l.192.291.861 1.292c.787 1.18 1.18 1.769 1.007 2.244a1.002 1.002 0 0 1-.134.252c-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 0 1-.135-.252c-.172-.475.221-1.065 1.008-2.244l.86-1.292c.098-.146.146-.219.193-.292a8 8 0 0 0 1.19-3.325c.01-.085.02-.172.037-.347l.286-2.866Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M10.068 20.63c.114.106.365.2.714.267.35.067.778.103 1.218.103s.868-.036 1.217-.103c.35-.067.6-.161.715-.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bellFill",
} as DefineComponent;
</script>
