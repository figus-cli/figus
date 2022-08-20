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
            fill-opacity=".24"
            d="m17.33 6.342-5.106 10.21a.25.25 0 0 1-.448 0L6.671 6.343a.5.5 0 0 1 .67-.671l4.212 2.105a1 1 0 0 0 .894 0l4.211-2.105a.5.5 0 0 1 .671.67Z"
        />
        <path stroke="currentColor" d="M14.5 17.5h4m-13 0h4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "jumpTimeDuotone",
} as DefineComponent;
</script>
