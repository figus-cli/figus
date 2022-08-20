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
            d="M8 4.461c0-.43 0-.644.065-.815a1 1 0 0 1 .58-.581C8.818 3 9.033 3 9.462 3h5.078c.43 0 .644 0 .815.065a1 1 0 0 1 .581.58c.065.172.065.387.065.816 0 1.107 0 1.66.073 2.198a8 8 0 0 0 .732 2.416c.237.489.544.949 1.158 1.87l1.399 2.098a.81.81 0 0 1-.478 1.236 28.382 28.382 0 0 1-13.768 0 .81.81 0 0 1-.478-1.236l1.399-2.098c.614-.921.92-1.381 1.158-1.87a8 8 0 0 0 .732-2.416C8 6.12 8 5.568 8 4.46Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 20v-4"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M6 20h12" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pined",
} as DefineComponent;
</script>
