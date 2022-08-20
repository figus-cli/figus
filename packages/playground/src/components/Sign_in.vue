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
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2c-5.185 0-9.449 3.947-9.95 9h9.536L8.293 7.707l1.414-1.414 5 5 .707.707-.707.707-5 5-1.414-1.414L11.586 13H2.049c.502 5.053 4.766 9 9.951 9Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signIn",
} as DefineComponent;
</script>
