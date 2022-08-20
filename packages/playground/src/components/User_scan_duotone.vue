<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="9" r="3" fill="currentColor" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M17.451 15.908a.237.237 0 0 1-.067.305A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788.237.237 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13c2.418 0 4.501 1.192 5.451 2.908Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556.556.557.556 1.453.556 3.244v.2m-4 13h.2c1.791 0 2.687 0 3.244-.556.556-.557.556-1.453.556-3.244v-.2m-15-13h-.2c-1.791 0-2.687 0-3.244.556C2.5 4.614 2.5 5.51 2.5 7.3v.2m4 13h-.2c-1.791 0-2.687 0-3.244-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userScanDuotone",
} as DefineComponent;
</script>
