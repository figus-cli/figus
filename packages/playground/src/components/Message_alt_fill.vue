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
            d="M3.013 9.151C3 9.691 3 10.302 3 11v2c0 2.828 0 4.243.879 5.121C4.757 19 6.172 19 9 19h6c2.828 0 4.243 0 5.121-.879C21 17.243 21 15.828 21 13v-2c0-.698 0-1.31-.013-1.849l-8.016 4.453a2 2 0 0 1-1.942 0L3.013 9.151Zm.23-2.121c.083.02.164.052.243.096L12 11.856l8.514-4.73a1.001 1.001 0 0 1 .243-.096c-.13-.474-.33-.845-.636-1.151C19.243 5 17.828 5 15 5H9c-2.828 0-4.243 0-5.121.879-.306.306-.506.677-.636 1.15Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageAltFill",
} as DefineComponent;
</script>
