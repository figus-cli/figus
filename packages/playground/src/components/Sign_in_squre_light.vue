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
            d="M7 7.132v-.52c0-2.146 0-3.219.69-3.817.69-.598 1.751-.446 3.876-.143l4.282.612c2.457.35 3.685.526 4.418 1.372C21 5.482 21 6.723 21 9.204v5.592c0 2.481 0 3.722-.734 4.568-.733.846-1.961 1.021-4.417 1.372l-4.283.612c-2.125.303-3.187.455-3.876-.143S7 19.534 7 17.388v-.322"
        />
        <path
            fill="currentColor"
            d="m16 12 .39-.312.25.312-.25.312L16 12Zm-12 .5a.5.5 0 0 1 0-1v1Zm8.39-5.812 4 5-.78.624-4-5 .78-.624Zm4 5.624-4 5-.78-.624 4-5 .78.624ZM16 12.5H4v-1h12v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInSqureLight",
} as DefineComponent;
</script>
