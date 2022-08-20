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
            d="M6.901 11.846a5.303 5.303 0 0 1 10.198 0l.558 1.954a7.996 7.996 0 0 0 1.035 2.239l.11.163c.139.21.208.314.243.391a1 1 0 0 1-.745 1.393c-.084.014-.21.014-.461.014H6.16c-.251 0-.377 0-.46-.014a1 1 0 0 1-.746-1.393c.035-.077.104-.182.244-.391l.109-.163a7.996 7.996 0 0 0 1.035-2.24l.558-1.953Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="m11 9 1-6m1 6-1-6m.5 18h-1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ringFill",
} as DefineComponent;
</script>
