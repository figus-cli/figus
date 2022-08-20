<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M18.207 6.785c-.732.676-1.653 1.224-2.696 1.606-1.044.383-2.187.59-3.348.608a10.348 10.348 0 0 1-3.378-.505c-1.064-.35-2.013-.87-2.782-1.523m12.32 10.352c-.74-.715-1.686-1.296-2.768-1.698A10.231 10.231 0 0 0 12.078 15a10.292 10.292 0 0 0-3.492.574c-1.092.386-2.053.953-2.811 1.657M12 4v16m8-8H4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "worldLight",
} as DefineComponent;
</script>
