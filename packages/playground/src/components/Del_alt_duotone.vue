<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <ellipse
            cx="12"
            cy="7"
            fill="currentColor"
            fill-opacity=".24"
            rx="7"
            ry="3"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 10c3.336 0 6.127-1 6.83-2.34.01-.02.06-.006.057.018l-1.775 10.647a1.787 1.787 0 0 1-.646 1.102 7.149 7.149 0 0 1-8.932 0 1.787 1.787 0 0 1-.646-1.102L5.113 7.679c-.004-.025.046-.04.058-.018C5.873 9 8.664 9.999 12 9.999Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "delAltDuotone",
} as DefineComponent;
</script>
