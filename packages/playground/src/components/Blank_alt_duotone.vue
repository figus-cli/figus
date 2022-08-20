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
            d="M5 19a2 2 0 0 0 2 2h4.75a.25.25 0 0 0 .25-.25V16a2 2 0 0 1 2-2h4.75a.25.25 0 0 0 .25-.25V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14Z"
        />
        <path
            fill="currentColor"
            d="M13 16v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 0 0-.177-.427H14a1 1 0 0 0-1 1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "blankAltDuotone",
} as DefineComponent;
</script>
