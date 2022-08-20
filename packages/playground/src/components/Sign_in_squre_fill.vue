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
            d="m15.621 2.669-3.69-.58c-3.22-.506-4.83-.76-5.88.139S5 4.756 5 8.016V11h5.92l-2.7-3.375 1.561-1.25 4 5 .5.625-.5.625-4 5-1.562-1.25L10.92 13H5v2.983c0 3.26 0 4.89 1.05 5.788 1.05.898 2.66.645 5.881.14l3.69-.58c1.613-.254 2.419-.38 2.899-.942.48-.561.48-1.377.48-3.01V6.62c0-1.632 0-2.449-.48-3.01-.48-.561-1.286-.688-2.899-.941Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInSqureFill",
} as DefineComponent;
</script>
