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
            fill-rule="evenodd"
            d="M10 2a3 3 0 0 0-3 3c-1.079.005-1.67.043-2.111.337a2 2 0 0 0-.552.552C4 6.393 4 7.096 4 8.5V18c0 1.886 0 2.828.586 3.414C5.172 22 6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586C20 20.828 20 19.886 20 18V8.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.44-.294-1.032-.332-2.111-.336V5a3 3 0 0 0-3-3h-4Zm0 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-1 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskAltFill",
} as DefineComponent;
</script>
