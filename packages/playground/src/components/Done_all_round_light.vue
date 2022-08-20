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
            d="m8 13 4.228 3.382a1 1 0 0 0 1.398-.148L22 6"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m10.805 11.917 4.582-5.6a.5.5 0 0 0-.774-.634l-4.576 5.594.768.64Zm-3.166 3.87-.769-.64-.65.794a.5.5 0 0 1-.687.084L2.3 13.6a.5.5 0 1 0-.6.8l3.233 2.425a1.5 1.5 0 0 0 2.061-.25l.645-.788Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllRoundLight",
} as DefineComponent;
</script>
