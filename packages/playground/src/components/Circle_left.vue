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
            d="m10 15-.707-.707-.707.707.707.707L10 15Zm3.293-4.707-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M4.206 12.75c-.99-.858-1.388-1.855-1.129-2.837.259-.983 1.158-1.895 2.559-2.595 1.401-.7 3.225-1.15 5.19-1.28 1.963-.129 3.958.07 5.674.565 1.716.495 3.057 1.26 3.815 2.175.758.915.891 1.93.378 2.887-.512.957-1.642 1.802-3.214 2.405-1.572.603-3.498.93-5.479.93"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "circleLeft",
} as DefineComponent;
</script>
