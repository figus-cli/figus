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
            d="M9 17.47a1 1 0 0 0 .757.97l4 1A1 1 0 0 0 15 18.47V6.53a1 1 0 0 0-.757-.97l-4-1A1 1 0 0 0 9 5.53v11.94Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M7 5.877a1 1 0 0 0-1.371-.929l-2 .8A1 1 0 0 0 3 6.677v11.846a1 1 0 0 0 1.371.928l2-.8A1 1 0 0 0 7 17.723V5.877Zm10 12.245a1 1 0 0 0 1.371.929l2-.8a1 1 0 0 0 .629-.928V5.476a1 1 0 0 0-1.371-.928l-2 .8a1 1 0 0 0-.629.929v11.846Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mapDuotone",
} as DefineComponent;
</script>
