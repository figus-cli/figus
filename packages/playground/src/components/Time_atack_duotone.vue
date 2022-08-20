<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".24" />
        <path
            fill="currentColor"
            d="M12 5.3c0-.143 0-.214.046-.258.047-.044.116-.041.254-.036A7 7 0 0 1 19 12a7 7 0 0 1-3.5 6.062 7 7 0 0 1-7 0 7 7 0 0 1-2.407-2.306c-.074-.116-.111-.175-.096-.237s.077-.098.2-.169l5.653-3.263c.073-.043.11-.064.13-.099.02-.034.02-.077.02-.161V5.3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeAtackDuotone",
} as DefineComponent;
</script>
