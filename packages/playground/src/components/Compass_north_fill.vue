<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M9 9V3.12a.05.05 0 0 1 .085-.035l5.83 5.83A.05.05 0 0 0 15 8.879V3M7.059 20.882l4.896-9.793a.05.05 0 0 1 .09 0l4.896 9.793a.05.05 0 0 1-.063.07l-4.86-1.945a.05.05 0 0 0-.037 0l-4.859 1.944a.05.05 0 0 1-.063-.069Z"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M12 12v7" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassNorthFill",
} as DefineComponent;
</script>
