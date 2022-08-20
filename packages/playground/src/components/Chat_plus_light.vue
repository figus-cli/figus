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
            d="M12.875 5C9.225 5 7.4 5 6.242 6.103a3.986 3.986 0 0 0-.139.139C5 7.4 5 9.225 5 12.875V17c0 .943 0 1.414.293 1.707C5.586 19 6.057 19 7 19h4.125c3.65 0 5.475 0 6.633-1.103a3.95 3.95 0 0 0 .139-.139C19 16.6 19 14.775 19 11.125"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M9 10h6m-6 4h3m7-6V2m-3 3h6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatPlusLight",
} as DefineComponent;
</script>
