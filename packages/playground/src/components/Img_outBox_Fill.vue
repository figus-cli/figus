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
            d="m3.5 15.5 1.91-1.91c1.346-1.346 2.018-2.018 2.747-2.08a1.999 1.999 0 0 1 1.065.205c.654.328 1.028 1.202 1.778 2.952l.053.124c.326.761.49 1.142.758 1.308a1 1 0 0 0 .7.134c.31-.054.603-.347 1.188-.932l.113-.113c.722-.722 1.082-1.082 1.491-1.234a2 2 0 0 1 1.394 0c.409.152.77.512 1.49 1.234l.752.751a3.621 3.621 0 0 0 1.964 1.011c-.125 1.328-.413 2.217-1.075 2.878C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2c0-2.84 0-4.61.5-5.812V15.5Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 3h-1C7.229 3 5.343 3 4.172 4.172 3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-1"
        />
        <path
            fill="currentColor"
            d="M21 3V2h1v1h-1Zm-4.375 4.78a1 1 0 0 1-1.25-1.56l1.25 1.56ZM20 8V3h2v5h-2Zm1-4h-5V2h5v2Zm.625-.22-5 4-1.25-1.56 5-4 1.25 1.56Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgOutBoxFill",
} as DefineComponent;
</script>
