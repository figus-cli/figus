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
            fill-rule="evenodd"
            d="M11.93 2.54C11.231 2.94 5.5 6.426 5.5 13a6.5 6.5 0 0 0 6 6.481v-4.615A1 1 0 0 1 11 14a1 1 0 1 1 2 0 1 1 0 0 1-.5.866v4.615a6.5 6.5 0 0 0 6-6.48c0-6.574-5.731-10.06-6.43-10.462a.138.138 0 0 0-.14 0Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M12 22v-2.5" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8.5 14a3.5 3.5 0 0 0 3 3.464v-2.598A1 1 0 0 1 11 14a1 1 0 1 1 2 0 1 1 0 0 1-.5.866v2.598a3.5 3.5 0 0 0 3-3.464v-.026c-.011-4.519-2.88-6.988-3.415-7.41a.137.137 0 0 0-.17 0C11.38 6.987 8.5 9.465 8.5 14Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fireDuotoneFill",
} as DefineComponent;
</script>
