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
            stroke-opacity=".24"
            d="M9.5 10C9.5 9.21 8.447 9 8.168 9.74 7.492 11.53 7 13.134 7 14a5 5 0 0 0 10 0c0-.93-.568-2.711-1.322-4.663-.975-2.528-1.463-3.792-2.066-3.86a1.026 1.026 0 0 0-.575.107C12.5 5.864 12.5 7.243 12.5 10a1.5 1.5 0 0 1-3 0Z"
        />
        <path fill="none" stroke="currentColor" d="M7 14a5 5 0 0 0 10 0" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fireAltDuotone",
} as DefineComponent;
</script>
