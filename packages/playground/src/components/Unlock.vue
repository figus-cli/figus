<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M4 13c0-1.885 0-2.828.586-3.414C5.172 9 6.114 9 8 9h8c1.886 0 2.828 0 3.414.586C20 10.172 20 11.115 20 13v2c0 2.829 0 4.243-.879 5.122C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.878C4 19.242 4 17.829 4 15v-2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="m16.5 9 .078-.62a5.519 5.519 0 0 0-2.41-5.273 5.519 5.519 0 0 0-6.68.416l-.818.709"
        />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "unlock",
} as DefineComponent;
</script>
