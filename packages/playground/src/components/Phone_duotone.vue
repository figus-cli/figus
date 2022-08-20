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
            d="m17.707 13.707 2.648 2.648a.912.912 0 0 1 0 1.29 5.471 5.471 0 0 1-7.151.508l-1.575-1.182a22.996 22.996 0 0 1-4.6-4.6l-1.182-1.575a5.471 5.471 0 0 1 .508-7.151.912.912 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.533.533 0 0 0-.1.616 12.262 12.262 0 0 0 5.484 5.484.533.533 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M20.355 17.645a.912.912 0 0 0 0-1.29l-2.648-2.648a1 1 0 0 0-1.414 0l-.793.793 3.905 3.905a5.476 5.476 0 0 0 .95-.76ZM5.595 4.595 9.5 8.5l.793-.793a1 1 0 0 0 0-1.414L7.645 3.645a.912.912 0 0 0-1.29 0 5.48 5.48 0 0 0-.76.95Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "phoneDuotone",
} as DefineComponent;
</script>
