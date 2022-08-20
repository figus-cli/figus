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
            d="M9.831 7.843c.85.458 3.097 1.764 3.901 3.157.804 1.393.812 3.992.784 4.957a.233.233 0 0 1-.347.2c-.85-.458-3.097-1.764-3.901-3.157-.804-1.393-.812-3.992-.784-4.957a.233.233 0 0 1 .347-.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassDuotone",
} as DefineComponent;
</script>
