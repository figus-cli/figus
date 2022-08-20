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
            d="m8.832 12.252.832.555-.832-.555Zm6.336 0 .832-.555-.832.555Zm4.796 7.193.832-.554-.832.554Zm-.832.555H4.867v2h14.264v-2ZM14 5v6.697h2V5h-2Zm.336 7.807L19.13 20l1.665-1.11L16 11.698l-1.664 1.11ZM4.868 20l4.796-7.193L8 11.697l-4.796 7.194L4.868 20ZM10 11.697V5H8v6.697h2Zm-.336 1.11a2 2 0 0 0 .336-1.11H8l1.664 1.11ZM14 11.697a2 2 0 0 0 .336 1.11L16 11.697h-2ZM4.869 20l-1.664-1.11C2.318 20.22 3.27 22 4.868 22v-2Zm14.263 2c1.597 0 2.55-1.78 1.664-3.11L19.13 20v2ZM16.9 18.2l-2.1-2.8a1 1 0 0 0-.8-.4h-4a1 1 0 0 0-.8.4l-2.1 2.8a.5.5 0 0 0 .4.8h9a.5.5 0 0 0 .4-.8Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 5h10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flaskAlt",
} as DefineComponent;
</script>
