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
            d="m15.545 4.52 2.849 1.22a1 1 0 0 1 .606.92v6.252a6 6 0 0 1-2.513 4.883l-3.906 2.79a1 1 0 0 1-1.162 0l-3.906-2.79A6 6 0 0 1 5 12.912V6.66a1 1 0 0 1 .606-.919l2.849-1.22a9 9 0 0 1 7.09 0Z"
        />
        <path
            stroke="currentColor"
            d="m9.5 12.5 1.894 1.894a.15.15 0 0 0 .212 0L15.5 10.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chieldCheckDuotone",
} as DefineComponent;
</script>
