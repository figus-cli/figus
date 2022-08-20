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
            stroke-width="2"
            d="M9.943 10.687a36.41 36.41 0 0 1-.009-2.265c.595.324 1.3.725 1.958 1.14.48.303.918.602 1.26.876.37.295.537.487.58.562.044.075.127.315.197.783.065.434.106.962.129 1.53.03.776.025 1.588.008 2.265-.595-.324-1.3-.725-1.958-1.14-.48-.303-.917-.603-1.26-.876-.37-.295-.537-.487-.58-.562-.043-.075-.126-.315-.197-.783a14.448 14.448 0 0 1-.128-1.53Z"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compass",
} as DefineComponent;
</script>
