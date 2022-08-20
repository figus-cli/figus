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
            fill-opacity=".24"
            d="M3.956 14.784c.498-3.237.747-4.856 1.871-5.82C6.951 8 8.588 8 11.864 8h.273c3.275 0 4.912 0 6.036.964 1.124.964 1.373 2.583 1.87 5.82l.603 3.912c.164 1.07.247 1.606-.053 1.955-.299.349-.84.349-1.924.349H5.33c-1.083 0-1.625 0-1.924-.349-.3-.349-.217-.884-.053-1.955l.602-3.913Z"
        />
        <path stroke="currentColor" d="M8.5 11V7.5a3.5 3.5 0 1 1 7 0V11" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bagAltDuotone",
} as DefineComponent;
</script>
