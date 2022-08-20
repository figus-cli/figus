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
            fill-rule="evenodd"
            d="M17.451 15.908a.237.237 0 0 1-.067.305A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788.237.237 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13c2.418 0 4.501 1.192 5.451 2.908Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17 4h.502c1.211 0 1.817 0 2.281.232a2.2 2.2 0 0 1 .985.985C21 5.68 21 6.287 21 7.498V8m-4 12h.502c1.211 0 1.817 0 2.281-.232a2.2 2.2 0 0 0 .985-.985c.232-.464.232-1.07.232-2.281V16M7 4h-.502c-1.211 0-1.817 0-2.281.232a2.2 2.2 0 0 0-.985.985C3 5.68 3 6.287 3 7.498V8m4 12h-.502c-1.211 0-1.817 0-2.281-.232a2.2 2.2 0 0 1-.985-.985C3 18.32 3 17.713 3 16.502V16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userScanFill",
} as DefineComponent;
</script>
