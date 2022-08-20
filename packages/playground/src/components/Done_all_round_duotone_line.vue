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
            stroke-width="1.2"
            d="m8 13 4.228 3.382a1 1 0 0 0 1.398-.148L22 6"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="m10.565 12.368 4.9-5.988a.6.6 0 0 0-.93-.76L9.644 11.6l.922.768Zm-2.533 3.096-.922-.769-.967 1.183a.4.4 0 0 1-.55.067L2.36 13.52a.6.6 0 0 0-.72.96l3.233 2.425a1.6 1.6 0 0 0 2.198-.267l.961-1.174Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllRoundDuotoneLine",
} as DefineComponent;
</script>
