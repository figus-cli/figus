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
            d="M2.5 4.5h19m-17 0h15v12.6c0 .84 0 1.26-.164 1.581a1.5 1.5 0 0 1-.655.655c-.32.164-.74.164-1.581.164H6.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.655-.655c-.164-.32-.164-.74-.164-1.581V4.5Zm7.5 11V10"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m9.5 11.5 2.406-1.925a.15.15 0 0 1 .188 0L14.5 11.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadListLight",
} as DefineComponent;
</script>
