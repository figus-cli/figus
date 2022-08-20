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
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 17v3"
        />
        <path
            fill="currentColor"
            d="m6.255 15.386.79.614-.79-.614ZM10.445 10V9a1 1 0 0 0-.79.386l.79.614Zm7.3 5.386-.79.614.79-.614ZM13.555 10l.79-.614a1 1 0 0 0-.79-.386v1Zm-6.51 6 4.189-5.386-1.579-1.228-4.19 5.386L7.046 16Zm0 0-1.579-1.228C4.444 16.086 5.38 18 7.045 18v-2Zm9.91 0h-9.91v2h9.91v-2Zm0 0v2c1.665 0 2.6-1.914 1.58-3.228L16.954 16Zm-4.189-5.386L16.956 16l1.578-1.228-4.19-5.386-1.578 1.228ZM13.556 9h-3.112v2h3.112V9Z"
        />
        <path
            fill="currentColor"
            d="m12 4 .707-.707a1 1 0 0 0-1.414 0L12 4Zm-.707-.707L7 7.586 8.414 9l4.293-4.293-1.414-1.414ZM8.414 11h7.172V9H8.414v2ZM17 7.586l-4.293-4.293-1.414 1.414L15.586 9 17 7.586ZM15.586 11C17.368 11 18.26 8.846 17 7.586L15.586 9v2ZM7 7.586C5.74 8.846 6.632 11 8.414 11V9L7 7.586Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tree",
} as DefineComponent;
</script>
