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
            fill-rule="evenodd"
            d="M7 4.433c0-.156 0-.234-.05-.279-.052-.045-.128-.035-.28-.015-1.12.143-1.902.436-2.498 1.033C3 6.343 3 8.229 3 12c0 3.771 0 5.657 1.172 6.828C5.343 20 7.229 20 11 20h2c3.771 0 5.657 0 6.828-1.172C21 17.657 21 15.771 21 12c0-3.771 0-5.657-1.172-6.828-.596-.597-1.378-.89-2.499-1.033-.151-.02-.227-.03-.278.015S17 4.277 17 4.432V6.5a1.5 1.5 0 0 1-3 0V4.3c0-.141 0-.212-.044-.256-.044-.043-.114-.043-.255-.044H10.3c-.142 0-.212 0-.256.045C10 4.088 10 4.159 10 4.3v2.2a1.5 1.5 0 0 1-3 0V4.433Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M8.5 2.5v4m7-4v4" />
        <path stroke="currentColor" stroke-width="1.2" d="M12 16v-6m3 3H9" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calendarAddDuotone",
} as DefineComponent;
</script>
