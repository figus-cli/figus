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
            d="M18.252 3.428a.5.5 0 0 1 .748.434v16.276a.5.5 0 0 1-.748.434l-2.256-1.288a1 1 0 0 0-.992 0l-2.21 1.262a1.6 1.6 0 0 1-1.588 0l-2.21-1.263a1 1 0 0 0-.992 0l-2.256 1.29A.5.5 0 0 1 5 20.138V3.862a.5.5 0 0 1 .748-.435l2.256 1.29a1 1 0 0 0 .992 0l2.21-1.263a1.6 1.6 0 0 1 1.588 0l2.21 1.262a1 1 0 0 0 .992 0l2.256-1.289ZM9.5 9a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ticketAltFill",
} as DefineComponent;
</script>
