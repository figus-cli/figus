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
            d="M8 4.461c0-.43 0-.644.065-.815a1 1 0 0 1 .58-.581C8.818 3 9.033 3 9.462 3h5.078c.43 0 .644 0 .815.065a1 1 0 0 1 .581.58c.065.172.065.387.065.816v.218c0 .89 0 1.335.048 1.77a8.001 8.001 0 0 0 .852 2.816c.201.387.448.757.942 1.498l1.038 1.557a1.423 1.423 0 0 1-.84 2.17 24.907 24.907 0 0 1-12.08 0 1.423 1.423 0 0 1-.84-2.17l1.038-1.557c.494-.74.74-1.111.942-1.498a8 8 0 0 0 .853-2.817C8 6.014 8 5.57 8 4.68v-.218Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M12 20v-6.5" />
        <path stroke="currentColor" stroke-width="2" d="M6 20h12" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pinedFill",
} as DefineComponent;
</script>
