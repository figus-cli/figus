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
            d="M2 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 0 1h-1.36a.14.14 0 0 0-.14.14V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5.14A.14.14 0 0 0 3.86 5H2.5a.5.5 0 0 1-.5-.5Z"
        />
        <path
            stroke="currentColor"
            d="M12 15.5V10m-2.5 1.5 2.406-1.925a.15.15 0 0 1 .188 0L14.5 11.5m-12-7h19"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadListDuono",
} as DefineComponent;
</script>
