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
            d="M18.98 9.253a7.524 7.524 0 0 0-4.233-4.234 3.001 3.001 0 0 0-.534.868 6.518 6.518 0 0 1 3.9 3.9c.32-.129.613-.31.868-.534Zm-6.752-3.749A6.614 6.614 0 0 0 12 5.5a6.5 6.5 0 1 0 6.5 6.5 6.636 6.636 0 0 0-.004-.228 4.976 4.976 0 0 0 .976-.425 7.5 7.5 0 1 1-6.82-6.819 4.975 4.975 0 0 0-.424.976Z"
            clip-rule="evenodd"
        />
        <circle cx="17" cy="7" r="3" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "status",
} as DefineComponent;
</script>
