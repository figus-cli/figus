<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17 12c0 2.611-.637 4.927-1.615 6.557C14.395 20.206 13.168 21 12 21c-1.168 0-2.396-.794-3.385-2.443C7.637 16.927 7 14.61 7 12s.637-4.927 1.615-6.557C9.605 3.794 10.832 3 12 3c1.168 0 2.396.794 3.385 2.443C16.363 7.073 17 9.39 17 12Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 17c-2.611 0-4.927-.637-6.557-1.615C3.794 14.395 3 13.168 3 12c0-1.168.794-2.396 2.443-3.385C7.073 7.637 9.39 7 12 7s4.927.637 6.557 1.615C20.206 9.605 21 10.832 21 12c0 1.168-.794 2.396-2.443 3.385C16.927 16.363 14.61 17 12 17Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "atomAlt",
} as DefineComponent;
</script>
