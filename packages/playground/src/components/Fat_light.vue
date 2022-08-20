<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="m15 12 .626-.737c.849-.998 2.478-.305 2.348.998-.141 1.41 1.719 2.04 2.465.838L20.5 13M9 12l-.177 1.006c-.28 1.587-2.546 1.622-2.875.044l-.171-.822C5.537 11.079 3.962 10.922 3.5 12"
        />
        <circle cx="9.5" cy="6.5" r=".5" stroke="currentColor" />
        <circle cx="16.5" cy="8.5" r=".5" stroke="currentColor" />
        <circle cx="13.5" cy="5.5" r=".5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fatLight",
} as DefineComponent;
</script>
