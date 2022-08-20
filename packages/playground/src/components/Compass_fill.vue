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
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.598-11.5c-.574-.994-3.575-2.645-4.931-3.355a.478.478 0 0 0-.704.407c-.064 1.53-.135 4.954.439 5.948.574.994 3.575 2.645 4.932 3.355a.478.478 0 0 0 .704-.407c.063-1.53.134-4.954-.44-5.948Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassFill",
} as DefineComponent;
</script>
