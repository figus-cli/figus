<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <path
            fill="currentColor"
            d="M17.78 18.826a.286.286 0 0 0 .134-.355c-.386-.966-1.128-1.818-2.133-2.438C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.005.62-1.747 1.471-2.133 2.438a.286.286 0 0 0 .134.355 12.011 12.011 0 0 0 11.56 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userCicrle",
} as DefineComponent;
</script>
