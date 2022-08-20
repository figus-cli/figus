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
            d="M10.056 4.231 8 8l4.5 4.5-1 2.5 3.5-3-4-4 1.351-1.687a.566.566 0 0 0 .174-.23c1.34-3.19 5.607-3.78 7.763-1.075l.388.487a5.54 5.54 0 0 1-.718 7.652l-7.39 6.364c-.23.197-.344.296-.477.32a.497.497 0 0 1-.182 0c-.133-.024-.248-.123-.477-.32l-7.39-6.364a5.54 5.54 0 0 1-.718-7.652l.388-.487c1.633-2.05 4.478-2.207 6.344-.777Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "brokenHeartFill",
} as DefineComponent;
</script>
